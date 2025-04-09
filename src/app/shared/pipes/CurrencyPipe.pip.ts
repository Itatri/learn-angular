import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'currencyPipe',
  standalone: true, // <-- Để component này hoạt động độc lập
})
export class CurrencyPipe implements PipeTransform {
    // Phương thức transform() được gọi khi pipe được sử dụng dùng để định dạng giá tiền
    // Giải thích:
    // Value là giá trị đầu vào của pipe
    // Ví dụ: {{ 12345678 | currencyPipe:'VND' }}
    // Output: 12,345,678 VND
    transform(value: number) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    }

    
}