import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellOrdersPage } from './sell-orders';

@NgModule({
  declarations: [
    SellOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(SellOrdersPage),
  ],
})
export class SellOrdersPageModule {}
