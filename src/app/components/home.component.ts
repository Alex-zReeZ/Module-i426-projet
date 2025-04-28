import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'root',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html'
})
export class AppComponent {}