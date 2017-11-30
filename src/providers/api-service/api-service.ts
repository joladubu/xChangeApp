import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ApiServiceProvider {

  // public userToken: any = this.nativeStorage.getItem('token');
  // public tokenStorage: any;
  
  constructor(public http: Http,
              public loadingCtrl: LoadingController,
              public nativeStorage: NativeStorage) {

              
  }

promiseGet(url, token){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', token)
    
    this.http.get(url, {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      });
});
}

promisePost(data, url){

  return new Promise((resolve, reject) => {
    // this.userToken = this.nativeStorage.getItem('token');  
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
   //   headers.append('Authorization', 'bearer '+ token);
      this.http.post(url, JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        });
  });
}

loading(){
 let loader = this.loadingCtrl.create({
   content: "Please wait...",
   duration: 10000,
   dismissOnPageChange: true
  
  });
  loader.present();
  return loader
}
  // userStatus(){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept', 'application/json');
  //   let status: any;
  //   status = this.http.get(this.userStatusUrl, {headers: headers})
  //   .map(res => res.json()); 
  // return status;
  // }


  // displayRates(){

  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //     headers.append('Accept', 'application/json');
  //     let amount: any;
  //     amount = this.http.get(this.displayRatesUrl, {headers: headers})
  //     .map(res => res.json()); 
  //   return amount;
  // }

  // viewProfile() {
  //   // return new Promise((resolve) => {
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //     headers.append('Accept', 'application/json');
  //     // console.log()
  //     this.http.get(userProfile, {headers: headers})
  // }
}

