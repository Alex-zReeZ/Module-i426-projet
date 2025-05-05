import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'root',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html'
})

export class HomeComponent {}