import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImage } from '../../models/product.image';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
  imports: [FooterComponent, HeaderComponent, CommonModule],
})
export class DetailProductComponent implements OnInit {
  product?: Product;
  productId: number = 0;
  currentImageIndex: number = 0;
  isPressedAddToCart: boolean = false;
  quantity: number = 1;
  constructor(
    private productService: ProductService, // private categoryService: CategoryService, // private router: Router, // private activatedRoute: ActivatedRoute
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // this.cartService.clearCart();
    //lấy productId từ URL
    debugger;
    const idParam = 5; //fake tạm 1 giá trị
    if (idParam !== null) {
      this.productId = +idParam;
    }
    if (!isNaN(this.productId)) {
      this.productService.getDetailProduct(this.productId).subscribe({
        next: (response: any) => {
          debugger;
          // lấy danh sách sản phẩm và thay đổi url
          if (response.product_images && response.product_images.length > 0) {
            response.product_images.forEach((product_image: ProductImage) => {
              product_image.image_url = this.processImageUrl(
                product_image.image_url
              );
            });
          }
          debugger;
          this.product = response;
          //Bắt đầu với hình ảnh đầu tiên
          this.showImage(0);
        },
        complete: () => {
          debugger;
        },
        error: (error: any) => {
          debugger;
          console.error('Error fetching detail:', error);
        },
      });
    } else {
      console.error('Invalid productId: ', idParam);
    }
  }
  processImageUrl(url: string): string {
    if (url.includes('http')) {
      // Chuỗi có chứa "http", không cần xử lý
      return url;
    } else {
      // Chuỗi không có "http", nối thêm baseUrl
      return `${environment.apiBaseUrl}/products/images/${url}`;
    }
  }
  showImage(index: number): void {
    debugger;
    if (
      this.product &&
      this.product.product_images &&
      this.product.product_images.length > 0
    ) {
      // Đảm bảo index nằm trong khoảng hợp lệ
      if (index < 0) {
        index = 0;
      } else if (index >= this.product.product_images.length) {
        index = this.product.product_images.length - 1;
      }
      // Gán index hiện tại và cập nhật ảnh hiển thị
      this.currentImageIndex = index;
    }
  }
  thumbnailClick(index: number) {
    debugger;
    // Gọi khi một thumbnail được bấm
    this.currentImageIndex = index; // Cập nhật currentImageIndex
  }
  nextImage(): void {
    debugger;
    this.showImage(this.currentImageIndex + 1);
  }

  previousImage(): void {
    debugger;
    this.showImage(this.currentImageIndex - 1);
  }
  addToCart(): void {
    debugger;
    this.isPressedAddToCart = true;
    if (this.product) {
      //đây là id fake để test => this.product.id
      this.cartService.addToCart(this.productId, this.quantity);
    } else {
      // Xử lý khi product là null
      console.error('Không thể thêm sản phẩm vào giỏ hàng vì product là null.');
    }
  }
  increaseQuantity(): void {
    // debugger;
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  buyNow(): void {      
    // if(this.isPressedAddToCart == false) {
    //   this.addToCart();
    // }
    // this.router.navigate(['/orders']);
  }  
}
