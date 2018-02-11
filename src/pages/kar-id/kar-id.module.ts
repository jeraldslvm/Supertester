import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { KarIdPage } from './kar-id';

@NgModule({
  declarations: [
    KarIdPage,
  ],
  imports: [
    IonicPageModule.forChild(KarIdPage),
    TranslateModule.forChild()
  ],
})
export class KarIdPageModule {}
