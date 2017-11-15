import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutletUpdateAccountPage } from './outlet-update-account';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OutletUpdateAccountPage,
    
  ],
  imports: [
    IonicPageModule.forChild(OutletUpdateAccountPage),
    TranslateModule.forChild()
  ],
})
export class OutletUpdateAccountPageModule {}
