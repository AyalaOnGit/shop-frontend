import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Cart } from '../../services/cart'; // הנתיב לסרביס שלך

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ButtonModule, DividerModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class header1 {
  constructor(public cart: Cart) {}
}
