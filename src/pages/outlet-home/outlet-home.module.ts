import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutletHomePage } from './outlet-home';

@NgModule({
  declarations: [
    OutletHomePage,
  ],
  imports: [
    IonicPageModule.forChild(OutletHomePage),
  ],
})
export class OutletHomePageModule {}
