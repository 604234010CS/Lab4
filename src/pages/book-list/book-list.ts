import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../../Models/book.models';



@Component({
  selector: 'page-booklist',
  templateUrl: 'booklist.html',
})
export class BooklistPage {

  books:Book; 
  category:string;

  constructor(private bookrest:BookRestProvider, public navCtrl: NavController, public NavParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.NavParams.get("category");
    this.bookrest.getbookList().subscribe(data=>{
      this.books=data.filter(book => book.category === this.category);
   });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooklistPage');
  }

  

}
