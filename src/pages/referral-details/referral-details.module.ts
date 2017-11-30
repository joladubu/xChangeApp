import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferralDetailsPage } from './referral-details';

@NgModule({
  declarations: [
    ReferralDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferralDetailsPage),
  ],
})
export class ReferralDetailsPageModule {}
