import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private router=inject(Router);
  userService=inject(UserService);
  
  conection(){
    this.router.navigate(['/connection']);
  }

  editOrders(){
    this.router.navigate(['/order-history']);
  }
}
