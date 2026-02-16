import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // חייבת לייבא את זה עבור [(ngModel)]
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CategoryService } from '../../services/category';
import { Category } from '../../models/category';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [InputTextModule, InputNumberModule, ButtonModule, SelectModule, FormsModule], // הוספנו FormsModule
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  categories: Category[] = [];
  // האובייקט המרכזי ששומר את המצב
  filterState = {
    name: '',
    maxPrice: null as number | null, // שיניתי מ-Infinity ל-null כדי שיהיה קל לנקות
    minPrice: null as number | null,
    category: 'all'
  };
  constructor(private categoryService: CategoryService) {}
  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  @Output() onFilterChange = new EventEmitter<any>();
  updateFilter(field: string, value: any) {
    // עדכון השדה באובייקט
    (this.filterState as any)[field] = value;
    
    // אם זה לא שדה השם (למשל בחירת קטגוריה), אולי נרצה שזה עדיין יסנן אוטומטית
    if (field !== 'name') {
      this.applyFilters();
    }
  }
  // applyFilters() {
  //   console.log('הפילטרים הנוכחיים:', this.filterState); // זה יעזור לנו לראות מה נשלח
  //   this.onFilterChange.emit({ ...this.filterState });
  // // }
  // פונקציה שנקראת בכל שינוי
  applyFilters() {
    // יוצרים עותק של המצב ושולחים לאבא
    const stateToSend = {
      ...this.filterState,
      maxPrice: this.filterState.maxPrice ?? Infinity, // אם זה ריק, נשלח אינסוף
      minPrice: this.filterState.minPrice ?? 0
    };
    this.onFilterChange.emit(stateToSend);
  }

  clearAllFilters() {
    // איפוס האובייקט שבאמת קשור לאינפוטים
    this.filterState = {
      name: '',
      maxPrice: null,
      minPrice: null,
      category: 'all'
    };
    
    // שליחת המצב המאופס לאבא כדי שיעדכן את הרשימה
    this.applyFilters();
  }
}