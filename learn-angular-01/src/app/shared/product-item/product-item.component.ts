import { NgFor } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductItems } from '../types/productItem';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pip';
import { UppercasePipe } from '../pipes/Uppercase.pipe';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    RouterLink,
    CurrencyPipe,
    UppercasePipe
    
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnChanges , OnDestroy{
  // Input dữ liệu từ component cha
  @Input() products: ProductItems[] = [];

  @Output() dataEvent = new EventEmitter<number>();  

  handleDelete = (id: number) => {
    // console.log(id);
     this.dataEvent.emit(id);
  }

  // Getter tính tổng giá trị sản phẩm
  get totalPrice(): string {
    const sum = this.products.reduce((total,item) => {
      return total + item.price;
    },0);
    return `Total Price ${sum}`;  // Changed double quotes to backticks
  }

  // // Mảng chứa sản phẩm
  // products = [
  //   { id: 1 , name: 'Samba OG', price: 500000000, image : 'assets/images/samba.jpg'}, 
  //   { id: 2 ,name: 'Nike F1', price: 400000000, image : 'assets/images/nikef1.jpg'}, 
  //   { id: 3 ,name: 'Adidas', price: 500000000, image : 'assets/images/adidas.jpg'}, 
  //   { id: 4 ,name: 'MLB F3', price: 600000000, image : 'assets/images/mlb.png'}, 
  // ]\


  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes['products'].currentValue);
      console.log(changes['products'].previousValue);
  }

  ngOnDestroy(): void {
    console.log('Component is remove');
  }
}
