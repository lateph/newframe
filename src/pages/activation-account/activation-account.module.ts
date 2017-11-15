import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivationAccountPage } from './activation-account';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ActivationAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivationAccountPage),
    TranslateModule.forChild() 
  ],
})
export class ActivationAccountPageModule {}
