import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams, ToastController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { PriceTickPage } from '../../pages/price-tick/price-tick';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  public updateUrl : any = "http://188.166.15.35/api/profile/update" ;
  public updateData = {userId:'', firstName:'', lastName:'', email:'', phone:'', address:'' };
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public apiServiceProvider: ApiServiceProvider,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
    content: 'Please wait...',
   // duration: 150000,
    dismissOnPageChange: true
  })
  loader.present();
this.apiServiceProvider.promisePost(this.updateData, this.updateUrl).then((result)=>{
  if(result['code']== 200){
  let toast = this.toastCtrl.create({
    // message: result['data'],
    message: 'Update Successfully',
    duration: 1000,
    position: 'top'
  
  });
  toast.present();
  this.navCtrl.setRoot(PriceTickPage);
} error => {
  
  let toast = this.toastCtrl.create({     
    message: error.message,
    duration: 1000,
    position: 'top'
  });
  toast.present();
  }
})

}

}
