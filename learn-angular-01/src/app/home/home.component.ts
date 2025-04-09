import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pip';
import { UppercasePipe } from '../shared/pipes/Uppercase.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from "../shared/product-item/product-item.component";
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductItemComponent, 
    NgIf
  ],
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

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
  isVisible = true;
  
  handleChangeVisible = () =>{
    this.isVisible = !this.isVisible; 
  }

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

    this.products = this.products.filter(item => item.id !== event);
  }

  // Creation Angular
  constructor(private http: HttpClient)
  {
    console.log('Initalize Component');
  }
  // ngOnInit() chạy sau khi khởi tạo component ( giao diện đã được hiển thị)
  ngOnInit(): void // implements OnInit trước khi gọi ngOnInit
  {
    console.log('Initalize initialized');

    // Sử dụng Angular HttpClient để fetch API
    this.http.get<any>('https://ninedev-api.vercel.app/blogs')
      .subscribe(({data, message}) => 
        {
          this.products = data.map((item: any) => {
            return {
             ...item,
             name : item.title,
             price: Number(item.body),
             image : 'assets/images/adidas.jpg'

            }
          });
        });
  }

  // ngDoCheck(): void {
  //   console.log('Check Component');
  // }
}
