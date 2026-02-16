import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-cart-page',
  imports: [RouterLink,CurrencyPipe,DividerModule,ButtonModule,CardModule],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        // טיפול במוצרים שנכנסים (אחד אחרי השני)
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger('120ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        
        // טיפול במוצר שנמחק (יוצא לאט ובצורה חלקה)
        query(':leave', [
          animate('400ms ease-in', style({ 
            transform: 'translateX(-30px)', 
            opacity: 0, 
            height: 0, 
            marginBottom: 0, 
            paddingTop: 0, 
            paddingBottom: 0 
          }))
        ], { optional: true })
      ])
    ])
  ]
})
export class CartPage {
  cartItems: any[] = [];
  @Input() product: any;
  
  constructor(public cartService: Cart) {}

  ngOnInit() {
    // קבלת כל המוצרים מהסל ברגע שהדף נטען
    this.cartItems = this.cartService.getItems();
  }
  // הפונקציה שמופעלת מה-HTML
  changeQuantity(item: any, delta: number) {
    this.cartService.updateQuantity(item, delta);
    this.cartItems = this.cartService.getItems();
  }
  get total() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
  
  removeFromCart(item: any) {
    // שולחים את כל האובייקט כדי שהסרוויס ידע בדיוק מה להסיר
    this.cartService.removeItem(item); 
    
    // מעדכנים את התצוגה
    this.cartItems = this.cartService.getItems();
}
}
