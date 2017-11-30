import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
//Importing Pages
import { HomePage } from '../pages/home/home';

import { SignupPage } from '../pages/signup/signup';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ReferralsPage } from '../pages/referrals/referrals';
import { ReferralDetailsPage } from '../pages/referral-details/referral-details';
import { PriceTickPage } from '../pages/price-tick/price-tick';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { PaymentInfoPage } from '../pages/payment-info/payment-info';
import { BuyOrdersPage } from '../pages/buy-orders/buy-orders';
import { SellOrdersPage } from '../pages/sell-orders/sell-orders';
import { SellBitcoinPage } from '../pages/sell-bitcoin/sell-bitcoin';
import { BuyBitcoinPage } from '../pages/buy-bitcoin/buy-bitcoin';
import { SellPerfectMoneyPage } from '../pages/sell-perfect-money/sell-perfect-money';
import { BuyPerfectMoneyPage } from '../pages/buy-perfect-money/buy-perfect-money';
import { BuyBitcoinCardPaymentPage } from '../pages/buy-bitcoin-card-payment/buy-bitcoin-card-payment';
import { SellBitcoinAutomatedPage } from '../pages/sell-bitcoin-automated/sell-bitcoin-automated';
import { BuyBitcoinNairaBankPage } from '../pages/buy-bitcoin-naira-bank/buy-bitcoin-naira-bank';
import { SellBitcoinNairaBankPage } from '../pages/sell-bitcoin-naira-bank/sell-bitcoin-naira-bank';
import { NativeStorage } from '@ionic-native/native-storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiServiceProvider } from '../providers/api-service/api-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage,
    LoginPage,
    PriceTickPage,
    ProfilePage,
    EditProfilePage, 
    BuyOrdersPage,
    SellOrdersPage,
    SellBitcoinPage,
    SellPerfectMoneyPage,
    BuyBitcoinPage,
    BuyPerfectMoneyPage,
    BuyBitcoinCardPaymentPage,
    BuyBitcoinNairaBankPage,
    SellBitcoinNairaBankPage,
    SellBitcoinAutomatedPage,
    PaymentInfoPage,
    ReferralsPage,
    ReferralDetailsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage,
    LoginPage,
    PriceTickPage,
    ProfilePage,
    EditProfilePage,
    BuyOrdersPage,
    SellOrdersPage,    
    SellBitcoinPage,
    SellPerfectMoneyPage,
    BuyBitcoinPage,
    BuyPerfectMoneyPage,
    BuyBitcoinCardPaymentPage,
    BuyBitcoinNairaBankPage,
    SellBitcoinNairaBankPage,
    SellBitcoinAutomatedPage,
    PaymentInfoPage,
    ReferralsPage,
    ReferralDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    NativeStorage
  ]
})
export class AppModule {}
