import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})

export class FooterComponent implements OnInit {
  @Input() footerId: string = "terms-section";
  DynamicContent$!: Observable<string>;
  links = [{ key: "legal", url: "" },
  { key: "security", url: "" }
    , { key: "privacy", url: "" }]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.DynamicContent$ = this.http.get('assets/content/footer/footer.html', {
      responseType: 'text',
    });
  }

}