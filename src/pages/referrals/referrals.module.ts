import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferralsPage } from './referrals';

@NgModule({
  declarations: [
    ReferralsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferralsPage),
  ],
})
export class ReferralsPageModule {}
