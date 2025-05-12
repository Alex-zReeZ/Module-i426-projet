import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  imports: [],
  standalone: true,
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitle {
  @Input() title: string = '';
}