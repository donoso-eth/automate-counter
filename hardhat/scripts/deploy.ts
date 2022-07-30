// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

import { writeFileSync,readFileSync } from "fs";
import {copySync, ensureDir,existsSync } from 'fs-extra'
import { ethers,hardhatArguments } from "hardhat";
import config from "../hardhat.config";
import { join } from "path";
import { createHardhatAndFundPrivKeysFiles } from "../helpers/localAccounts";
import * as hre from 'hardhat';
import { initEnv } from "../helpers/utils";
import { ChainLinkIncreaseContract__factory, OZIncreaseContract__factory , K3rIncreaseContract__factory}  from "../typechain-types";
import {  } from "../typechain-types/factories/KeeperIncreaseContract__factory";


interface ICONTRACT_DEPLOY {
  artifactsPath:string,
  name:string,
  ctor?:any,
  jsonName:string
}

const contract_path_relative = '../src/assets/contracts/';
const processDir = process.cwd()
const contract_path = join(processDir,contract_path_relative)
ensureDir(contract_path)

async function main() {
  const [deployer] = await initEnv(hre);
  let network = hardhatArguments.network;
  if (network == undefined) {
    network = config.defaultNetwork;
  }

  const contract_config = JSON.parse(
    readFileSync(join(processDir, 'contract.config.json'), 'utf-8')
  ) as { [key: string]: ICONTRACT_DEPLOY };

  
  let toDeployName = 'chainLinkIncreaseContract';
  //let toDeployName = 'k3rIncreaseContract';
  let toDeployContract = contract_config[toDeployName];

  let artifactsPath = join(
    processDir,
    `./artifacts/contracts/${toDeployContract.artifactsPath}`
  );
  let metadataLink = JSON.parse(readFileSync(artifactsPath, 'utf-8'));
  const chainLinkApp = await new  ChainLinkIncreaseContract__factory(deployer).deploy(
    180
  );

  

  writeFileSync(
    `${contract_path}/${toDeployContract.jsonName}_metadata.json`,
    JSON.stringify({
      abi: metadataLink.abi,
      name: toDeployContract.name,
      address: chainLinkApp.address,
      network: network,
    })
  );

  console.log(
    toDeployContract.name + ' Contract Deployed to:',
    chainLinkApp.address
  );

  ///// copy Interfaces and create Metadata address/abi to assets folder
  copySync(
    `./typechain-types/${toDeployContract.name}.ts`,
    join(contract_path, 'interfaces', `${toDeployContract.name}.ts`)
  );
 

     



  ///// create the local accounts file

  if (
    !existsSync(join(contract_path,'local_accouts.json')) &&
    (network == 'localhost' || network == 'hardhat')
  ) {
    const accounts_keys = await createHardhatAndFundPrivKeysFiles(
      hre,
      contract_path
    );
    writeFileSync(

      `${contract_path}/local_accouts.json`,
      JSON.stringify(accounts_keys)
    );
  }

  ///// copy addressess files
  if (!existsSync(`${contract_path}/interfaces/common.ts`)) {
    copySync(
      './typechain-types/common.ts',
      join(contract_path, 'interfaces', 'common.ts')
    );
  }
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
