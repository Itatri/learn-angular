import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pip';
import { UppercasePipe } from '../shared/pipes/Uppercase.pipe';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
  [
     FormsModule, 
     CurrencyPipe, 
     UppercasePipe,
     NgFor, // <-- Import NgFor để sử dụng *ngFor trong template
    //  NgClass // <-- Import NgClass để sử dụng [ngClass] trong template
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
  products = [
    { name: 'Samba OG', price: 500000000, image : 'assets/images/samba.jpg'}, 
    { name: 'Nike F1', price: 400000000, image : 'assets/images/nikef1.jpg'}, 
    { name: 'Adidas', price: 500000000, image : 'assets/images/adidas.jpg'}, 
    { name: 'MLB F3', price: 600000000, image : 'assets/images/mlb.png'}, 
  ]
}
