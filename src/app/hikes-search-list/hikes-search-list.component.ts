import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PageTitle } from '../page-title/page-title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hikes-search-list',
  templateUrl: './hikes-search-list.component.html',
  styleUrls: ['./hikes-search-list.component.scss'],
  standalone: true,
  imports: [CommonModule, PageTitle, RouterModule],
})

export class HikesSearchListComponent implements OnInit {
  hikes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/walk').subscribe((data) => {
      if (Array.isArray(data)) {
        this.hikes = data;
      } else if (data && typeof data === 'object') {
        this.hikes = Object.entries(data).map(([id, hike]: [string, any]) => ({
          id,
          ...hike,
        }));
      } else {
        this.hikes = [];
      }
    });
  }
}
