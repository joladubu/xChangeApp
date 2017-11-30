import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyOrdersPage } from './buy-orders';

@NgModule({
  declarations: [
    BuyOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyOrdersPage),
  ],
})
export class BuyOrdersPageModule {}
