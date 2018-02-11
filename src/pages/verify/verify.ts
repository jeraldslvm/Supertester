import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { KarIdPage } from '../pages';

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translateService: TranslateService,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPage');
  }

  back()
  {
    this.navCtrl.popToRoot();
  }

  doVerify()
  {
        let toast = this.toastCtrl.create({
          message: 'OTP Verified Successfully',
          duration: 3000,
          position: 'top'
        });
        toast.present();

        this.navCtrl.push(KarIdPage);

  }


}
