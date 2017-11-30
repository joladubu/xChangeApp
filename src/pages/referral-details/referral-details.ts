import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { NativeStorage } from '@ionic-native/native-storage';



@IonicPage()
@Component({
  selector: 'page-referral-details',
  templateUrl: 'referral-details.html',
})
export class ReferralDetailsPage {
  public withdrawalData = { account:'', Bank:'' };
  public refferalUrl : any = "http://188.166.15.35/api/referral/show" ;  
  public bank: any = 'Naira Bank - 0034097725';
  public refferaldetails: any;
  public tokenStorage: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public apiServiceProvider: ApiServiceProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public nativeStorage : NativeStorage) {
                this.nativeStorage.getItem('token')
                .then(
                  data =>{
                   console.log("this is the user in Apiservice " + data);
                     this.tokenStorage = data;
                     
                   },
                  error => console.log("there is an error in Apiservice" + error)
                );  

                this.apiServiceProvider.promiseGet(this.refferalUrl, this.tokenStorage).then((result)=>{
                  this.refferaldetails = result;
                })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralDetailsPage');
  }

  withdraw(){
    this.apiServiceProvider.promisePost(this.withdrawalData, this.refferalUrl).then((data)=>{

      this.apiServiceProvider.loading();
      if(data['code']==200){

      }
    })
  }
}
