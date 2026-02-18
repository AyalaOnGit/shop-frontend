import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {

  
  private products = [
    { name: 'כוס קפה', price: 15, imageUrl: 'coffee.png', category: 'שתייה חמה' ,colors: ['black', 'brown']},
    { name: 'ספל תה', price: 20, imageUrl: 'coffee.png', category: 'שתייה חמה',colors: ['black', 'brown'] },
    { name: 'שוקולד חם', price: 12, imageUrl: 'chocolate.png', category: 'שתייה חמה' ,colors: ['black', 'brown']},
    { name: 'כוס קפה', price: 15, imageUrl: 'coffee.png', category: 'שתייה חמה',colors: ['black', 'brown'] },
    { name: 'ספל תה', price: 20, imageUrl: 'coffee.png', category: 'שתייה חמה',colors: ['black', 'brown'] },
    { name: 'שוקולד חם', price: 12, imageUrl: 'chocolate.png', category: 'שתייה חמה',colors: ['black', 'brown'] },
    { name: 'כוס קפה', price: 15, imageUrl: 'coffee.png', category: 'שתייה חמה',colors: ['black', 'brown'] },
    { name: 'ספל תה', price: 20, imageUrl: 'coffee.png', category: 'שתייה חמה',colors: ['black', 'brown'] },
    { name: 'שוקולד חם', price: 12, imageUrl: 'chocolate.png', category: 'שתייה חמה' ,colors: ['black', 'brown']},
    {
      id: 1,
      name: 'בקבוק טרמי',
      price: 89,
      imageUrl: 'assets/bottle.jpg',
      popularColor: 'תכלת',     // זה הצבע שיכנס אוטומטית לסל
      topText: 'אין כמו אמא'    // זה המשפט שיכנס אוטומטית לסל
    },
    {
      id: 2,
      name: 'מנורת לילה',
      price: 120,
      imageUrl: 'assets/lamp.jpg',
      popularColor: 'זהב',
      topText: 'לילה טוב נסיכה'
    }
  ];

  constructor() {}

  // פונקציה שמדמה קריאת API ומחזירה את הרשימה
  getProducts(): Observable<any[]> {
    return of(this.products); // of הופך את המערך ל-Observable
  }
}
