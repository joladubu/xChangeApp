import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReferralDetailsPage } from '../referral-details/referral-details';



@IonicPage()
@Component({
  selector: 'page-referrals',
  templateUrl: 'referrals.html',
})
export class ReferralsPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralsPage');
  }

  goToRefDetails() {
    this.navCtrl.push(ReferralDetailsPage);
  }

}
