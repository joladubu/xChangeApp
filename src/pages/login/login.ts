import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController, LoadingController, ToastController} from 'ionic-angular';
// import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';
import { SignupPage } from '../signup/signup';
import { PriceTickPage } from '../price-tick/price-tick';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { ApiServiceProvider } from '../../providers/api-service/api-service';

 
// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  public loginData = { email:'jekayode@live.com', password:'wisdom01' };
  data: any;
  errorMessage: any;
  public loginUrl : any = "http://188.166.15.35/api/login" ;
  public storageToken: any;
//  public nairaExFile: string;

  constructor(public navCtrl: NavController, // private implies a private instance variable is made inside the class
              public navParams: NavParams,
           
              public alertCtrl: AlertController,
              public apiServiceProvider: ApiServiceProvider,
              public toastCtrl: ToastController,
              public nativeStorage: NativeStorage,
              public loadingCtrl: LoadingController
             ) {}
        

             ionViewDidLoad() {
               console.log('ionViewDidLoad LoginPage');
             }

doLogin() {
// this.apiServiceProvider.loading()
  let loading = this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 20000
    //    dismissOnPageChange: true
    });
    loading.present();
this.apiServiceProvider.promisePost(this.loginData, this.loginUrl).then((result) => {
    // console.log(this.loginData);
    if(result['code'] == 200) {
     this.storageToken = result['data'];
     this.nativeStorage.setItem('token', this.storageToken)
     .then(
       () => console.log('Stored item!'),
       error => console.error('Error storing item', error)
     );
     // loader.dismiss();
      let toast = this.toastCtrl.create({
        // message: result['data'],
        message: 'Login Successful',
        duration: 2000,
        position: 'middle'
      });
      loading.dismiss();
      toast.present();


       this.navCtrl.setRoot(PriceTickPage);
      //  this.nativeStorage.clear().then(()=>{console.log('Stored item!')});
    }  else {
      let toast = this.toastCtrl.create({
        // message: result['data'],
        message: 'Please enter valid email and password',
        duration: 2000,
        position: 'middle',
    
      });
      loading.dismiss()
      toast.present();
  
    }
    
  }), error => {
    
    let toast = this.toastCtrl.create({     
      message: error.message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
    loading.dismiss();
  
  };
  
}

// showLoader(){
//   this.loading = this.loadingCtrl.create({
//       content: 'Authenticating...',
//       duration: 150000,
//       dismissOnPageChange: true
//   });

//   this.loading.present();
// }



  

//    goLogout() {
//   this.navCtrl.push(AdvertisePage);
// }

  Signup() {
    this.navCtrl.push(SignupPage)
  }

    showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Please enter your email!',
      message: 'New Password will be sent to your email',
      inputs: [
        {
          name: 'recoverEmail',
          placeholder: 'you@example.com'
        },
      ],
      buttons: ['Reset Password']
    });
    alert.present();
  }

  // goToMain() {
  //   this.navCtrl.setRoot(PriceTickPage);
  // }

}


