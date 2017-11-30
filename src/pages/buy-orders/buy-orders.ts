import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyBitcoinPage } from '../buy-bitcoin/buy-bitcoin';
import { BuyPerfectMoneyPage } from '../buy-perfect-money/buy-perfect-money';


@IonicPage()
@Component({
  selector: 'page-buy-orders',
  templateUrl: 'buy-orders.html',
})
export class BuyOrdersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyOrdersPage');
  }

  goBuyBitcoin() {
    this.navCtrl.push(BuyBitcoinPage);
  }

  goBuyPerfectMoney() {
    this.navCtrl.push(BuyPerfectMoneyPage);
  }

}
