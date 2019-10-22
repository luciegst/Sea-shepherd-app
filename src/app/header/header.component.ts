import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  items


  constructor(
    private cardService : CardService
  ) { }


  ngOnInit() {
    this.getProductsinCart();
  }

  getProductsinCart(){
    this.items = this.cardService.productSubject.subscribe((product: any[]) => {
      this.items = product;
    })
    this.cardService.getProductsinCart();
  }

  showMenu() {
    this.status = !this.status
  }

  sumQuantities(){
    let sum = 0
    this.items.forEach(element => {
      sum += element.quantity
    });
    return sum;
  }

  







}
