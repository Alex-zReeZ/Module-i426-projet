import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageTitle: string = '';
  menuOpen: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.getChild(this.route);
        this.pageTitle = childRoute.snapshot.data['title'] || 'Titre par défaut';
      });
  }

  getChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
