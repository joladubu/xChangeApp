import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service'
import { NativeStorage } from '@ionic-native/native-storage';
/**
 * Generated class for the PaymentInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-info',
  templateUrl: 'payment-info.html',
})
export class PaymentInfoPage {
  // public banks: any = 'Access Bank';
  // public options: any = 'Naira Bank';
  // public accountname: any;
  // public accountnumber: any;
  public paymentMethodData = { accountname:'', accountnumber:'', options: 'Naira Bank', banks: 'Access Bank'};
  public paymentUrl :any ="http://188.166.15.35/api/payment/create"
  public displayPaymentUrl: any = "http://188.166.15.35/api/payments/all"
  public tokenStorage : any;
  public bankName: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public apiServiceProvider: ApiServiceProvider,
              public nativeStorage: NativeStorage
             ) {
              this.nativeStorage.getItem('token')
              .then(
                data =>{
                 console.log("this is the user in Apiservice " + data);
                   this.tokenStorage = data;
                   
                 },
                error => console.log("there is an error in Apiservice" + error)
              );                
             this.updatePaymentMethod();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentInfoPage');
  }

  createPaymentMethod(){
    let loader = this.loadingCtrl.create({
      content: 'please wait...'
    })
    loader.present()
    this.apiServiceProvider.promisePost(this.paymentUrl, this.paymentMethodData ).then((result)=>{
      if(result['code']== 200){
        let toast = this.toastCtrl.create({
          // message: result['data'],
          message: 'Your Payment Method have been sucessfully added.',
          duration: 2000,
          position: 'middle',
        });
        loader.dismiss();
        toast.present();
      } else {
          let toast = this.toastCtrl.create({
          // message: result['data'],
          message: 'Error connecting to the internet.',
          duration: 2000,
          position: 'middle',
        });
        loader.dismiss();
        toast.present();
      }
    })
  }

  updatePaymentMethod(){
    this.apiServiceProvider.promiseGet(this.displayPaymentUrl, this.tokenStorage).then((result)=>{
      if(result['code']== 200){
        this.bankName = result['data'].option;
      }
    })
  }
}
