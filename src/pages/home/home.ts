import { BooklistPage } from './../book-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showBookList(categoryName:string){
  this.navCtrl.push(BooklistPage,
    {category:categoryName}
    );

  }

}
