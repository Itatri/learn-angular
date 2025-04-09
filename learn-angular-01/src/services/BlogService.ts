import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductItems, BlogItem } from "../app/shared/types/productItem";
import { responseData } from "../app/shared/types/responseData";

// Khai báo để có thể inject vào các component khác
@Injectable({providedIn: 'root'})

export class BlogService {
    constructor(private http: HttpClient) { }

    // Lấy danh sách sản phẩm
    getBlogs() : Observable<responseData<ProductItems[]>> {
       return  this.http.get<any>('https://ninedev-api.vercel.app/blogs'); 
    }

    // Lấy chi tiết sản phẩm
    detailBlog(id: number): Observable<responseData<ProductItems>> {
        return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`); // Sử dụng backticks
    }

    // Thêm sản phẩm mới
    postBlog(blogItem: BlogItem): Observable<responseData<ProductItems>> {
        return this.http.post<any>(`https://ninedev-api.vercel.app/blogs`, blogItem); // Sử dụng backticks
    }

    // Xóa sản phẩm
    deleteBlog(id: number): Observable<responseData<ProductItems>> {
        return this.http.delete<any>(`https://ninedev-api.vercel.app/blogs/${id}`); // Sử dụng backticks
    }


}