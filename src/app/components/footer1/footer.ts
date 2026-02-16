import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  imports: [ButtonModule, DividerModule,RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer1 {

}
