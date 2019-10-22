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
  items;

  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit() {
    this.getProductsinCart();
  }

  addToCard(product) {
    //check if the product is already on items array
    const found = this.items.some(item => item.id === product.id);
    //if you dont find it
    if (!found){
      //push the new product
      this.cardService.addToCard(product);
      window.alert(product.name + ' has been added to the card!');
    } else {
      //else check the items array
      window.alert('Already in cart');
      for (let i = 0; i < this.items.length; i++) {
        //if the id already exist
        if (this.items[i].id === product.id) {
          //change the quantity of the item
          this.items[i].quantity += 1;
        }
      }
    }
  }

  getProductsinCart() {
    this.cardService.productSubject.subscribe((product: any[]) => {
    this.items = product;
    })
    this.cardService.getProductsinCart();
  }
 

}
