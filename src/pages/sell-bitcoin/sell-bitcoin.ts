import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SellBitcoinNairaBankPage } from '../sell-bitcoin-naira-bank/sell-bitcoin-naira-bank';
import { SellBitcoinAutomatedPage } from '../sell-bitcoin-automated/sell-bitcoin-automated';


@IonicPage()
@Component({
  selector: 'page-sell-bitcoin',
  templateUrl: 'sell-bitcoin.html',
})
export class SellBitcoinPage {

  
  public bank: any;
  public sellBitcoinNairaBankTab = SellBitcoinNairaBankPage;
  public sellBitcoinAutomatedTab = SellBitcoinAutomatedPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellBitcoinPage');
  }

}
