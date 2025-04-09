import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../services/BlogService';
import { NgIf } from '@angular/common';
import { BlogItem } from '../shared/types/productItem';
import { Router } from '@angular/router'; // Sửa Route thành Router

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  // Tạo form controls cho form
  // name = new FormControl('');
  // price = new FormControl('');

  // Tạo form group cho các form controls
  products = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('', Validators.required)
  })
  // Sử dụng getter để lấy giá trị từ form control 
  // ( giúp private thông tin ra bên ngoài)
  get name() {
    return this.products.get('name') ; 
  }
  get price() {
    return this.products.get('price');
  }

  constructor(private blogService: BlogService, private router: Router) {} // Sửa Route thành Router

  handleAddCart() {
  //  console.log(this.name.value);
  //  console.log(this.price.value); 
  if (this.name?.hasError('required') || this.price?.hasError('required')) {
    // alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }

  const blogItem: BlogItem = {
    id: Math.random(),
    title: String(this.name?.value),
    body: String(this.price?.value),
    author: 'Nguyen Van A',
  }

  this.blogService.postBlog(blogItem).subscribe(({data} : any)  => {
    if (data.id)
      {
          this.router.navigate(['/']);
      }
  });

  // console.log(this.name?.value);
  // console.log(this.price?.value);
  }
}
