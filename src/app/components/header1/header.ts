import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Cart } from '../../services/cart'; 
import { MenuItem } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuModule, RouterLink, RouterLinkActive, ButtonModule, DividerModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit { // שם הקלאס מתוקן לאות גדולה
  @ViewChild('menu') menu!: Menu;

  profileMenuItems: MenuItem[] | undefined;
  overlayTimer: any;

  constructor(public cart: Cart) {}

  ngOnInit() {
    this.profileMenuItems = [
      { label: 'עריכת פרטי לקוח', icon: 'pi pi-user-edit', routerLink: '/profile' },
      { label: 'היסטוריית הזמנות', icon: 'pi pi-history', routerLink: '/order-history' }
    ];
  }

  showMenu(event: any) {
    this.clearTimer();
    this.menu.show(event);
  }

  hideMenu() {
    this.overlayTimer = setTimeout(() => {
      this.menu.hide();
    }, 200); // נותן למשתמש 200 מילישניות לעבור עם העכבר לתפריט
  }

  clearTimer() {
    if (this.overlayTimer) {
      clearTimeout(this.overlayTimer);
      this.overlayTimer = null;
    }
  }
}