import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-error-pages',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './error-pages.component.html',
  styleUrl: './error-pages.component.scss'
})

export class ErrorPageComponent {}