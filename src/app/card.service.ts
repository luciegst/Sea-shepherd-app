import { Injectable } from '@angular/core';
import {  Subject  } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CardService {
  items = [];
  productSubject = new Subject<any>();

  constructor() { }

  //add the product to your cart//
  addToCard(product: Object) {
    this.items.push(product);
  }


  //get items in your card//
  getProductsinCart(){
    this.productSubject.next(this.items);
  }

  //clear your cart//
  clearCart(){
    this.productSubject.next(this.items = [])
  }



}
