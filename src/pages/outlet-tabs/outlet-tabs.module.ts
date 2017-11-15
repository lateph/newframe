import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutletTabsPage } from './outlet-tabs';

@NgModule({
  declarations: [
    OutletTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(OutletTabsPage),
  ],
})
export class OutletTabsPageModule {}
