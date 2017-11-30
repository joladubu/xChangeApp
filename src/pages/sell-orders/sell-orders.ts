import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SellBitcoinPage } from '../sell-bitcoin/sell-bitcoin';
import { SellPerfectMoneyPage } from '../sell-perfect-money/sell-perfect-money';

@IonicPage()
@Component({
  selector: 'page-sell-orders',
  templateUrl: 'sell-orders.html',
})
export class SellOrdersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellOrdersPage');
  }

  goSellBitcoin() {
    this.navCtrl.push(SellBitcoinPage);
  }

  goSellPerfectMoney() {
    this.navCtrl.push(SellPerfectMoneyPage);
  }

}
