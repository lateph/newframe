import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tab1Root, Tab2Root, Tab3Root } from "../pages";

/**
 * Generated class for the OutletTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outlet-tabs',
  templateUrl: 'outlet-tabs.html',
})
export class OutletTabsPage {

  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutletTabsPage');
  }

}
