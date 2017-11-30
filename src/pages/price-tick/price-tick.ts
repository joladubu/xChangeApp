import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service'
import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-price-tick',
  templateUrl: 'price-tick.html',
})
export class PriceTickPage {


  public coins : any; 
  public transaction: any;
  public buy : any;
  public perfectmoneyNaira: any;
  public bitCoinNaira: any;
  public sell: any;
  public bitcoin: any;
  public perfectmoney: any;
  public rates :any;
  public btccurrency :any;
  public pmcurrency :any;
  
  public displayRatesUrl : any = "http://188.166.15.35/api/rates" ;
  public btc : any;
  public pm: any;
  public tokenStorage: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
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
              
            this.apiServiceProvider.promiseGet(this.displayRatesUrl, this.tokenStorage).then((result) => {
                
                  if(result['code'] == 200) {
                    this.rates = result;
                 this.btccurrency =  100 * this.bitcoin  
                 this.pmcurrency =  10 * this.perfectmoney  
             

                   
                   // loader.dismiss();
                   /* let toast = this.toastCtrl.create({
                      // message: result['data'],
                      message: 'Login Successful',
                      duration: 1000,
                      position: 'top'
                    });
                    toast.present();
                    this.navCtrl.setRoot(PriceTickPage); */
                  }  else {
                  /*  let toast = this.toastCtrl.create({
                      // message: result['data'],
                      message: 'Please enter valid email and password',
                      duration: 1000,
                      position: 'middle',
                  
                    });
                    loader.dismiss();
                    toast.present();
                */
                  }
                
                }, error => {
                  
                 /* let toast = this.toastCtrl.create({     
                    message: error.message,
                    duration: 3000,
                    position: 'middle'
                  });
                  loader.dismiss();
                  toast.present();
              
                  
              */
                });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PriceTickPage');
  }

}
