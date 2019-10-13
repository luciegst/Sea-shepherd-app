import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CardService } from '../card.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = products;

  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit() {
   
  }

  addToCard(product) {
    window.alert('Your product has been added to the card!');
    this.cardService.addToCard(product);
  }
 

}
