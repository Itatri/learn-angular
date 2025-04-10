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
  productItem: ProductItems = {
    id: 0,
    name: '',
    image: '',
    price: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.blogService.detailBlog(+this.id).subscribe({
      next: ({data}: any) => {
        if (data) {  // Thêm kiểm tra data tồn tại
          this.productItem.id = data.id;
          this.productItem.image = data.image || 'assets/images/samba.jpg';
          this.productItem.name = data.title;
          this.productItem.price = Number(data.body);
        }
      },
      error: (error) => {
        console.error('Error fetching detail:', error);
      }
    });
  }
}
