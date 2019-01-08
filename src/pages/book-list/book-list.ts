import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BooklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-booklist',
  templateUrl: 'booklist.html',
})
export class BooklistPage {

   category:string;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category");
    console.log(this.category);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooklistPage');
  }

  

}
