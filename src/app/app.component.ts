import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [RouterOutlet],
})

export class AppComponent {}