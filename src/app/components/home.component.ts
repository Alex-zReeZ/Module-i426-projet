import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'root',
  standalone: true,
  imports: [MatButtonModule],  // Import Material Button module
  templateUrl: './home.component.html',  // Link your HTML template
})
export class AppComponent {}