import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getProductsinCart();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  getProductsinCart(){
     this.items = this.cardService.productSubject.subscribe((product: any[]) => {
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




}
