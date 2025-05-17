import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageTitle } from '../page-title/page-title.component';

@Component({
  selector: 'app-hikes-details',
  imports: [RouterOutlet, PageTitle],
  templateUrl: './hikes-details.component.html',
  styleUrl: './hikes-details.component.scss'
})
export class HikesDetailsComponent {}
