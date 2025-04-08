import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pip';
import { UppercasePipe } from '../shared/pipes/Uppercase.pipe';
import { NgClass, NgFor } from '@angular/common';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from "../shared/product-item/product-item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductItemComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // // Text
  // title =
  // {
  //   name:'Hello',
  //   old:2024,
  // };

  // // Property
  // isDisabled = true;

  // // Attributes
  // contentImage = 'Young Tri';


  // nameBtn = 'Click Me';
  // clickMessage = '';

  // handleClickMe(): void{
  //   this.clickMessage = 'Click me Hello World';
  // }

  // updateField(): void{
  //   console.log('Hello World');
  // }

  // bindingMessage = '';

  // isActive = false;
  
  // Mảng chứa sản phẩm
  products: ProductItems []  = [
    { 
      id: 1 , 
      name: 'Samba OG', 
      price: 500000000, 
      image : 'assets/images/samba.jpg'
    }, 
    { 
      id: 2 ,
      name: 'Nike F1', 
      price: 400000000, 
      image : 'assets/images/nikef1.jpg'
    }, 
    { 
      id: 3 
      ,name: 'Adidas'
      , price: 500000000
      , image : 'assets/images/adidas.jpg'
    }, 
    { 
      id: 4 ,
      name: 'MLB F3', 
      price: 600000000, 
      image : 'assets/images/mlb.png'
    }, 
  ]

  handleDelete = (event: number) =>
  {
    const productIndex = this.products.findIndex(item => item.id == event);
    if (productIndex !== -1)
    {
      this.products.splice(productIndex, 1);
    }
  }

}
