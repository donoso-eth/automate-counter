import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldContractModule } from './1-hello-world-contract/hello-world-contract.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DappInjectorModule } from './dapp-injector/dapp-injector.module';
import { StoreModule } from '@ngrx/store';
import { we3ReducerFunction } from 'angular-web3';


import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { LoadingComponent } from './shared/components/loading/loading.component';
import { AppTopBarComponent } from './shared/components/toolbar/app.topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    AppTopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloWorldContractModule,
    BrowserAnimationsModule,
    DappInjectorModule.forRoot({wallet:'local', defaultNetwork:'localhost'}),
    StoreModule.forRoot({web3: we3ReducerFunction}),
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
    DragDropModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
