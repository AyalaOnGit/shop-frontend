import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CartItem } from '../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe,RouterLink,ButtonModule,CardModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardMin {
  @Input() isAdmin: boolean = false;
  @Input() product: CartItem | null = null; // שימוש במודל במקום כתיבת אובייקט ארוך

  @Output() edit = new EventEmitter<CartItem>(); // מאפשר לאבא לדעת שלחצו על עריכה
  // @Input() product: { 
  //   id?: number;
  //   name: string; 
  //   price: number; 
  //   imageUrl: string; 
  //   popularColor?: string;
  //   topText?: string;
  //   color?: string;
  //   customText?: string;
  // } | null = null;
  onEdit() {
    if (this.product) {
      this.edit.emit(this.product); // שליחת המוצר לקומפוננטת האב לעריכה
    }
  }
  constructor(private cartService: Cart) {} // הזרקת השירות
  onAddToCart() {
    if (this.product) {
      // כאן אנחנו יוצרים את המוצר ה"סופי" שנכנס לסל
      const customProduct = {
        ...this.product,
        color: this.product.popularColor || 'לבן', // לוקח את הפופולרי או ברירת מחדל
        customText: this.product.topText || 'באהבה גדולה'
      };
      
      this.cartService.addToCart(customProduct);
      alert(`הוספת לסל: ${customProduct.name} עם הכיתוב "${customProduct.customText} עם הצבע "${customProduct.color}"`);
    }
  }
}
