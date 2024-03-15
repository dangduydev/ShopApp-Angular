import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { environment } from '../../environments/environment';
import { error } from 'console';

@Component({
  selector: 'app-order-confirm',
  standalone: true,
  templateUrl: './order-confirm.component.html',
  styleUrl: './order-confirm.component.scss',
  imports: [FooterComponent, HeaderComponent, CommonModule],
})
export class OrderConfirmComponent implements OnInit {
  cartItems: { product: Product; quantity: number }[] = [];
  totalAmount: number = 0;
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Lấy danh sách sản phẩm từ giỏ hàng
    debugger;
    const cart = this.cartService.getCart();
    const productIds = Array.from(cart.keys()); // chuyển danh sách ID từ Map giỏ hàng
    // Gọi service để lấy thông tin sản phầm dựa trên danh sách ID
    debugger;
    this.productService.getProductsByIds(productIds).subscribe({
      next: (products) => {
        debugger;
        // Lấy thông tin sản phẩm và số lượng từ danh sách sản phẩm và giỏ hàng
        this.cartItems = productIds.map((productId) => {
          debugger;
          const product = products.find((p) => p.id === productId);
          if (product) {
            product.thumbnail = `${environment.apiBaseUrl}/products/images/${product.thumbnail}`;
          }
          return {
            product: product!,
            quantity: cart.get(productId)!,
          };
        });
        console.log('haha');
      },
      complete: () => {
        debugger;
      },
      error: () => {
        console.error('Error fetching detail: ', error);
      },
    });
  }
  // Hàm tính tổng tiền
  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
