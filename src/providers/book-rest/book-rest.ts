import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BookRestProvider {

  private url:string="https://raw.githubusercontent.com/kesinee-bo/Images/master/cs_books.json"

  constructor(public http: HttpClient) {
    console.log('Hello BookRestProvider Provider');
  }

}