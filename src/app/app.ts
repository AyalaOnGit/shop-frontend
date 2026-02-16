import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardMin } from './components/product-card-min/product-card';
import { ProductsPage } from './components/products-page/products-page';
import { Filter } from './components/filter/filter';
import { Pagination } from './components/pagination/pagination';
import { UserProfile } from './components/user-profile/user-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductCardMin,ProductsPage,Filter,Pagination,UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-pro');
}
