import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { PriceTickPage } from '../price-tick/price-tick';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  presentLoading() {
    this.loadingCtrl.create({
    content: 'Please wait...',
    duration: 150000,
    dismissOnPageChange: true
  }).present();

  setTimeout(() => {
    this.navCtrl.setRoot(PriceTickPage);
  });
}
}
