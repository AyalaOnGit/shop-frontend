import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuModule, RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  profileMenuItems: MenuItem[] = [];

  constructor(public cart: Cart) {}

  ngOnInit() {
    this.profileMenuItems = [
      {
        // label: 'החשבון שלי',
        items: [
          { label: 'התחברות', icon: 'pi pi-sign-in', routerLink: '/connection'},
          { separator: true },
          { label: 'פרופיל אישי', icon: 'pi pi-user', routerLink: '/profile' },
          { label: 'הזמנות שלי', icon: 'pi pi-shopping-bag', routerLink: '/order-history' },
          { separator: true },
          { label: 'התנתקות', icon: 'pi pi-power-off' }
        ]
      }
    ];
  }
}