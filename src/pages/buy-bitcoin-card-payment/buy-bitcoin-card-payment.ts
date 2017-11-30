import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service'

/**
 * Generated class for the BuyBitcoinCardPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-bitcoin-card-payment',
  templateUrl: 'buy-bitcoin-card-payment.html',
})
export class BuyBitcoinCardPaymentPage {

  public createOrderUrl : any = "http://localhost/api/order/create" ;
  public orderData = { email:'', password:'' };
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public apiServiceProvider: ApiServiceProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyBitcoinCardPaymentPage');
  }

  createOrder(){

    this.apiServiceProvider.loading();
  
    this.apiServiceProvider.promisePost(this.orderData, this.createOrderUrl).then((result) => {
      if(result['code'] == 200)
  
  
        this.navCtrl.pop()
      
    }, error => {
      
      let toast = this.toastCtrl.create({     
        message: error.message,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  
      
  
    });    
  }
}
