import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyPage } from './verify';

@NgModule({
  declarations: [
    VerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(VerifyPage),
    TranslateModule.forChild()
  ],
  exports: [
    VerifyPage
  ]
})
export class VerifyPageModule {}
