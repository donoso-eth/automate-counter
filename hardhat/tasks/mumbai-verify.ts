import { readFileSync } from 'fs-extra';
import { task } from 'hardhat/config';
import { initEnv } from '../helpers/utils';
import { join } from 'path';

const contract_path_relative = '../src/assets/contracts/';
const processDir = process.cwd()
const contract_path = join(processDir,contract_path_relative)
const contract_config = JSON.parse(readFileSync( join(processDir,'contract.config.json'),'utf-8')) as {[key:string]: any}



task('mumbai-verify', 'verify').setAction(async ({}, hre) => {

  


  //let deployContract="k3rIncreaseContract"
  let deployContract = 'chainLinkIncreaseContract';
  let toDeployContract = contract_config[deployContract];
  const linkApp = JSON.parse(readFileSync(`${contract_path}/${toDeployContract.jsonName}_metadata.json`,'utf-8'))

  const [deployer] = await initEnv(hre)

  console.log(deployer.address)
  console.log(linkApp.address)
  await hre.run("verify:verify", {
    address: linkApp.address,
    constructorArguments: [
   180
    ],
  });





  });


  