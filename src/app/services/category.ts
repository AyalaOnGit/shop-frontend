import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category'; // ייבוא המודל

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // הנתונים הסטטיים שלך עוברים לכאן
  private categories: Category[] = [
    { label: 'כל הקטגוריות', value: 'all' },
    { label: 'שתייה חמה', value: 'שתייה חמה' },
    { label: 'מאפים', value: 'מאפים' }
  ];

  constructor() {}

  // הפונקציה הזו "מזייפת" קריאת שרת
  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
