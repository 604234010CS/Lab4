import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../Models/book.models';
//import { Book } from '../../models/book.models';
@Injectable()
export class BookRestProvider {

  private url:string="https://raw.githubusercontent.com/kesinee-bo/Images/master/cs_books.json"

  constructor(public http: HttpClient) {
    console.log('Hello BookRestProvider Provider');
  }

  getbookList():Observable<any>{
    return this.http.get<Book>(this.url);
  }



}
