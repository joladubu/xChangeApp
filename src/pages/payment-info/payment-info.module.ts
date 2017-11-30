import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentInfoPage } from './payment-info';

@NgModule({
  declarations: [
    PaymentInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentInfoPage),
  ],
})
export class PaymentInfoPageModule {}
