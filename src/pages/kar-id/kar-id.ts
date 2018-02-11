import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { MainPage } from '../pages';



/**
 * Generated class for the KarIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kar-id',
  templateUrl: 'kar-id.html',
})
export class KarIdPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translateService: TranslateService,
    public toastCtrl: ToastController)  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KarIdPage');

  }

  doVerifyPatient()
  {
    this.navCtrl.push(MainPage);
  }

}
