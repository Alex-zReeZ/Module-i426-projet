import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitle } from '../page-title/page-title.component';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hikes-details',
    imports: [CommonModule, PageTitle],
    templateUrl: './hikes-details.component.html',
    styleUrl: './hikes-details.component.scss'
})
export class HikesDetailsComponent implements OnInit {
    hike: any;
    safeMapUrl: SafeResourceUrl | null = null;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.http.get<any>(`http://localhost:3000/walk?id=${id}`).subscribe(data => {
            console.log('Données reçues :', data);
            // Si c'est un tableau, prends le premier élément :
            this.hike = Array.isArray(data) ? data[0] : data;
            this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.hike.mapEmbedUrl);
        });
    }

}
