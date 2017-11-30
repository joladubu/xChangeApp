import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyBitcoinPage } from './buy-bitcoin';

@NgModule({
  declarations: [
    BuyBitcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyBitcoinPage),
  ],
})
export class BuyBitcoinPageModule {}
