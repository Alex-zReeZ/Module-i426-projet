import { Component, Input } from '@angular/core';
import { Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-title',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitle {
  @Input() title: string = '';
  @Input() showBackButton: boolean = false;
  @Input() titleColor: string = '';

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
