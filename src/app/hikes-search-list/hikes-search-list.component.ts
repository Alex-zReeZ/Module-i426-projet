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
  filteredHikes: any[] = [];

  selectedDuration: string | null = null;
  selectedCanton: string | null = null;
  selectedCity: string | null = null;
  selectedRadius: string | null = null;
  selectedDifficulty: string | null = null;

  openDropdown: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/walk').subscribe(data => {
      if (Array.isArray(data)) {
        this.hikes = data;
      } else if (data && typeof data === 'object') {
        this.hikes = Object.entries(data).map(
          ([id, hike]: [string, any]) => ({ id, ...hike })
        );
      } else {
        this.hikes = [];
      }
      this.filterHikes();
    });
  }

  toggleDropdown(name: string): void {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

 filterHikes(): void {
  this.filteredHikes = this.hikes.filter(hike => {
    const matchDuration = !this.selectedDuration
      || Number(hike.duration) === Number(this.selectedDuration);

    const matchCanton = !this.selectedCanton
      || hike.location?.toLowerCase().includes(this.selectedCanton.toLowerCase());

    const matchCity = !this.selectedCity
      || hike.location?.toLowerCase().includes(this.selectedCity.toLowerCase());

    const matchRadius = !this.selectedRadius
      || String(hike.radius) === this.selectedRadius; 

    const matchDifficulty = !this.selectedDifficulty
      || hike.difficulty?.toLowerCase() === this.selectedDifficulty.toLowerCase();

    return matchDuration && matchCanton && matchCity && matchRadius && matchDifficulty;
  });
}


  resetFilters(): void {
    this.selectedDuration = null;
    this.selectedCanton = null;
    this.selectedCity = null;
    this.selectedRadius = null;
    this.selectedDifficulty = null;
    this.filterHikes();
  }
}
