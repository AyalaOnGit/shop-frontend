import { Component, OnInit } from '@angular/core';
import { ProductCardMin } from '../product-card-min/product-card';
import { Filter } from '../filter/filter';
import { Pagination } from '../pagination/pagination';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Cart } from '../../services/cart';
import {Product} from '../../services/product';
import {CartItem } from '../../models/product'; // המודל שיצרת
import { header1 } from '../header1/header';
import { Footer1 } from '../footer1/footer';

@Component({
  selector: 'app-products-page',
  imports: [Footer1, header1, Filter,ProductCardMin,Pagination,RouterLink,ButtonModule,DividerModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage implements OnInit{
  productList: CartItem[] = [];
  filteredList: CartItem[] = [];
  currentPage: number = 1; // תמיד מתחילים מדף ראשון
  pageSize: number = 4;    // נניח שנרצה 3 מוצרים בכל דף

  currentUserIsAdmin: boolean = false; // שיניתי ל-true כדי שתוכלי לראות שהעריכה עובדת

  constructor(
    public cart: Cart,
    private productService: Product // הזרקת הסרביס
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
      this.filteredList = [...this.productList];
    });
  }

  // פונקציה חדשה שתטפל בלחיצה על עריכה מהכרטיס
  handleEdit(product: CartItem) {
    console.log('עורך את המוצר:', product);
    // כאן בהמשך תוכלי לפתוח Dialog (פופ-אפ) לעריכה
  }

  filterProducts(filters: any) {
    this.currentPage = 1;
    this.filteredList = this.productList.filter(product => {
      // בדיקה אם השם מתאים
      const matchesName = product.name.includes(filters.name);
      
      // בדיקה שהמחיר גדול או שווה למינימום וגם קטן או שווה למקסימום
      const matchesPrice = product.price >= filters.minPrice && 
      product.price <= filters.maxPrice;
        
      // בדיקה אם הקטגוריה מתאימה (אם יש לך שדה כזה במוצר)
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
  
      // המוצר יוצג רק אם הוא עומד בכל התנאים
      return matchesName && matchesPrice && matchesCategory;
    });
  }

  // פונקציה שמחזירה רק את המוצרים של הדף הנוכחי
  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredList.slice(startIndex, startIndex + this.pageSize);
  }

  // פונקציה למעבר דף
  changePage(newPage: number) {
    this.currentPage = newPage;
    window.scrollTo(0, 0); // מקפיץ את הדף לראש הרשימה כדי שלא יצטרכו לגלול למעלה
  }
}
