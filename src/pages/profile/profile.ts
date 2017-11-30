import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// importing pages
import { EditProfilePage} from '../../pages/edit-profile/edit-profile';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { NativeStorage } from '@ionic-native/native-storage';






@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public profile: any;
  public profileUrl : any = "http://188.166.15.35/api/profile/show" ;
  public email: any;
  public phone: any;
  public storageToken : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public apiServiceProvider: ApiServiceProvider,
              public nativeStorage: NativeStorage) {
                this.nativeStorage.getItem('token')
                .then(
                  data =>{
                   console.log("this is the user in Apiservice " + data);
                     this.storageToken = data;
                     
                   },
                  error => console.log("there is an error in Apiservice" + error)
                );                
                this.apiServiceProvider.promiseGet(this.profileUrl, this.storageToken).then((result) => {
                  if(result['code'] == 200){
                  //this.profile = result;
                  this.email = result['data'].email;
                  this.phone = result['data'].data.phone;
                  }
                
                  console.log(result['code'])
                })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editProfile() {

    this.navCtrl.push(EditProfilePage);
  }
 
}
