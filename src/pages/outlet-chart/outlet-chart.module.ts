import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutletChartPage } from './outlet-chart';

@NgModule({
  declarations: [
    OutletChartPage,
  ],
  imports: [
    IonicPageModule.forChild(OutletChartPage),
  ],
})
export class OutletChartPageModule {}
