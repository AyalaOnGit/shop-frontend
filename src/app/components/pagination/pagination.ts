import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-pagination',
  imports: [ButtonModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
    @Input() totalItems: number = 0; // כמה מוצרים יש בסך הכל
    @Input() pageSize: number = 4;   // כמה מוצרים בדף
    @Output() pageChanged = new EventEmitter<number>(); // מודיע לאבא על שינוי דף
    @Input() currentPage: number = 1;

    get totalPages(): number {
      return Math.ceil(this.totalItems / this.pageSize);
    }

    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.pageChanged.emit(this.currentPage); // שולח לאבא: "תעבור לדף X"
      }
    }
  }
