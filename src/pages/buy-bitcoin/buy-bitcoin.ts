import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

import { BuyBitcoinCardPaymentPage } from '../buy-bitcoin-card-payment/buy-bitcoin-card-payment';
import { BuyBitcoinNairaBankPage } from '../buy-bitcoin-naira-bank/buy-bitcoin-naira-bank';




@IonicPage()
@Component({
  selector: 'page-buy-bitcoin',
  templateUrl: 'buy-bitcoin.html',
})
export class BuyBitcoinPage {

  public bank: any;
  public buyBitcoinNairaBankTab = BuyBitcoinNairaBankPage;
  public buyBitcoinCardPaymentTab = BuyBitcoinCardPaymentPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyBitcoinPage');
  }

}
