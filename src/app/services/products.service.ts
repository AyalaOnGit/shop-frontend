import { Injectable } from '@angular/core';
import { ProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:ProductDTO[] = [
  {ProductId: 1, ProductName: 'ספל קרמיקה מעוצב', Description: 'ספל קרמיקה עם עיצוב ייחודי, מתאים לשתיית קפה או תה.', price: 75.25, imageUrl: 'https://example.com/images/ceramic-mug.jpg',CategoryDTO:{CategoryName:'כלי בית'}},
  {ProductId: 2, ProductName: 'סט צלחות עץ', Description: 'סט של 4 צלחות עץ טבעיות, מושלם לאירוח או לשימוש יומיומי.', price: 300.00, imageUrl: 'https://example.com/images/wooden-plates.jpg',CategoryDTO:{CategoryName:'כלי בית'}},
  {ProductId: 3, ProductName: 'מנורת לילה בצורת ירח', Description: 'מנורת לילה רכה בצורת ירח, יוצרת אווירה נעימה בחדר השינה.', price: 120.00, imageUrl: 'https://example.com/images/moon-lamp.jpg',CategoryDTO:{CategoryName:'תאורה'}},
  {ProductId: 4, ProductName: 'מחזיק מפתחות מעוצב', Description: 'מחזיק מפתחות עם עיצוב מודרני, מתאים לכל סוגי המפתחות.', price: 45.00, imageUrl: 'https://example.com/images/key-holder.jpg',CategoryDTO:{CategoryName:'אביזרים'}},
  {ProductId: 5, ProductName: 'סט כלי מטבח סיליקון', Description: 'סט של 5 כלי מטבח עשויים סיליקון עמיד בחום, כולל כף, מרית ועוד.', price: 150.00, imageUrl: 'https://example.com/images/silicone-kitchen-tools.jpg',CategoryDTO:{CategoryName:'כלי מטבח'}},
  {ProductId: 6, ProductName: 'תיק גב מעוצב', Description: 'תיק גב אופנתי עם עיצוב ייחודי, מתאים לשימוש יומיומי או לטיולים.', price: 200.00, imageUrl: 'https://example.com/images/designer-backpack.jpg', CategoryDTO:{CategoryName:'תיקים'}}];

  constructor() { }
}
