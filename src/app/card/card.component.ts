import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { products } from '../products';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  items;
  checkoutForm;
  products = products;
  subscription: Subscription;

  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,
  ) {
   }

  ngOnInit() {
    this.getProductsinCart();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  getProductsinCart() {
    this.cardService.productSubject.subscribe((product: any[]) => {
    this.items = product;
    })
    this.cardService.getProductsinCart();
  }

  clearCart(){
    window.alert('Your order has been submitted');
    this.items = this.cardService.productSubject.subscribe((product: any[]) => {
      this.items = product;
    })
    this.cardService.clearCart()
    this.checkoutForm.reset();
  }

  //increase the quantity of item//
  increase(index: number){
    this.items[index].quantity +=1;
  }
  

  //decrease the quantity of item//
  decrease(index: number) {
    this.items[index].quantity -=1;
    //if quantity = 0 modify the array length;
    //it ensure that you can't have negative numbers in your card//
    if (this.items[index].quantity === 0){
      this.items.splice(index, 1);
    }
  }

  //get the all quantities in your shopping card//
  sumQuantities(){
    let sum = 0
    this.items.forEach(element => {
      sum += element.quantity
    });
    return sum;
  }

  getTotal(){
    let total = 0;
    this.items.forEach(element => {
      total += element.quantity * element.price
    })
    return total;
  }
  


}
