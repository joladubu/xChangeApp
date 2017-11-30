import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriceTickPage } from './price-tick';

@NgModule({
  declarations: [
    PriceTickPage,
  ],
  imports: [
    IonicPageModule.forChild(PriceTickPage),
  ],
})
export class PriceTickPageModule {}
