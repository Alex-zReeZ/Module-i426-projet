import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { PageTitle } from '../page-title/page-title.component';

@Component({
  selector: 'root',
  standalone: true,
  imports: [MatButtonModule, RouterLink, PageTitle],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {}