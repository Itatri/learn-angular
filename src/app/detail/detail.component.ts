import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductItems } from '../shared/types/productItem';
import { BlogService } from '../../services/BlogService';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    //  RouterOutlet,
    ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  id = '';

  // Khởi tạo state productItem với kiểu dữ liệu ProductItems 
  // để lưu trữ thông tin chi tiết sản phẩm
  productItem: ProductItems = {
    id: 0,
    name: '',
    image: '',
    price: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService  // Thêm BlogService vào đây
  ) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.blogService.detailBlog(+this.id).subscribe(({data}:any) => {
      this.productItem.id = data.id;
      this.productItem.image = data.image || 'assets/images/samba.jpg'; // Thêm fallback image
      this.productItem.name = data.title;
      this.productItem.price = Number(data.body); // Chuyển đổi sang number
    });
}

}
