import { Component, ViewChild } from '@angular/core';
import { Nav,  Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

//Importing Pages
import { LoginPage } from '../pages/login/login';
import { PriceTickPage } from '../pages/price-tick/price-tick';
import { BuyOrdersPage } from '../pages/buy-orders/buy-orders';
import { SellOrdersPage } from '../pages/sell-orders/sell-orders';
import { ProfilePage } from '../pages/profile/profile';
import { PaymentInfoPage } from '../pages/payment-info/payment-info';
import { ReferralsPage } from '../pages/referrals/referrals';
import { ApiServiceProvider } from '../providers/api-service/api-service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  public storageToken: any;
  // rootPage: any = ReferralsPage;
  

  // pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public loadingCtrl: LoadingController,
              public nativeStorage: NativeStorage,
              public apiServiceProvider: ApiServiceProvider ) {
                this.nativeStorage.getItem('token')
                .then(
                  data =>{
                   console.log("this is the user in Apiservice " + data);
                     this.storageToken = data;
                     
                   },
                  error => console.log("there is an error in Apiservice" + error)
                );                

                  if(this.storageToken != ""){
                     this.rootPage = PriceTickPage; 
                    
                  } else {
                    this.rootPage = LoginPage
                  }
                


    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.splashScreen.show();
      // this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToProfilePage(){
    this.nav.push(ProfilePage);
  }

  logout() {
    this.apiServiceProvider.loading();
    this.nativeStorage.clear().then(()=>{
      this.nav.setRoot(LoginPage);
    })
  }

  goToBuyOrders() {
    this.nav.push(BuyOrdersPage);
  }

  goToSellOrders() {
    this.nav.push(SellOrdersPage);
  }

  goToPayment() {
    this.nav.push(PaymentInfoPage);
  }

  goToReferrals() {
    this.nav.push(ReferralsPage);
  }
}
