import { Component } from '@angular/core';
import { PageTitle } from '../page-title/page-title.component';

@Component({
  selector: 'app-hikes-search-list',
  templateUrl: './hikes-search-list.component.html',
  styleUrl: './hikes-search-list.component.scss',
  imports: [PageTitle],
  standalone: true,
})

export class HikesSearchListComponent {}
