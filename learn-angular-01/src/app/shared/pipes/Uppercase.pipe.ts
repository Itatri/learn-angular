import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'uppercase',
  standalone: true, // <-- Để component này hoạt động độc lập
})

export class UppercasePipe implements PipeTransform {
    // Phương thức transform() được gọi khi pipe được sử dụng dùng để định dạng chữ in hoa
    // Giải thích:
    // Value là giá trị đầu vào của pipe
    // Ví dụ: {{ 'hello world' | uppercase }}
    // Output: HELLO WORLD
  transform(value: string): string {
    return value.toUpperCase();
  } 
}