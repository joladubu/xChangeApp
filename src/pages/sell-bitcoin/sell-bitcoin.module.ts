import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellBitcoinPage } from './sell-bitcoin';

@NgModule({
  declarations: [
    SellBitcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(SellBitcoinPage),
  ],
})
export class SellBitcoinPageModule {}
