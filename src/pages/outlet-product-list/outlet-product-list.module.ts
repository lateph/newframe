import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutletProductListPage } from './outlet-product-list';

@NgModule({
  declarations: [
    OutletProductListPage,
  ],
  imports: [
    IonicPageModule.forChild(OutletProductListPage),
  ],
})
export class OutletProductListPageModule {}
