import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'root',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet],
  templateUrl: './home.component.html'
})

export class HomeComponent {}