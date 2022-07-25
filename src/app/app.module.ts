import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentRepository } from './core/repository/payment/payments.repository';
import { RemoteGatewayFactory } from './core/gateway/remote-gateway-factory';
import { PaymentParser } from './core/parser/payment/payment.parser';
import { AppContext } from './core/context/app-context';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './core/service/service.module';
@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceModule.forRoot()
  ],
  providers: [
     AppContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
