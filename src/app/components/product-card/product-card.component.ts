import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../header1/header';
import { Footer1 } from '../footer1/footer';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ Footer1,Header,FormsModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  productName: string = 'מוצר לדוגמא';
  productPrice: number = 99.99;
  productImage: string = '../productsImages/cup_of_coffee.png';
  productDescription: string = 'פה יש תיאור על המוצר לדוגמא. זה יכול להיות כל דבר שתרצה להוסיף כדי לתאר את המוצר שלך בצורה טובה יותר.';
  colors: string[] = ['Red', 'Blue', 'Green'];
  selectedColor: string = '';
  userText: string = 'your text here';
  showToast: boolean = false;

  selectColor(color: string) {
    this.selectedColor = color;
  }

  addToCart() {
  alert(`המוצר ${this.productName} בצבע ${this.selectedColor} עם הטקסט: "${this.userText}" נוסף לסל!`);
}

  copyLink() {
    const url=window.location.href;
    navigator.clipboard.writeText(url).then(() => {
    this.showToast=true;

    // מעלימים את ההודעה אוטומטית אחרי 3 שניות
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
    }).catch(err => {
      console.error('שגיאה בהעתקת הקישור: ', err);
    });
  }

}
