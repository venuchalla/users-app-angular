import { HttpClient } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { from, Observable, of } from 'rxjs';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})

export class FooterComponent implements OnInit {
  @Input() footerId: string = "terms-section";
  DynamicContent$!: Observable<SafeHtml>;
  links = [{key : "legal", url :""},
    {key : "security", url :""}
    ,{key : "privacy", url :""}]
  constructor(private domSanitizer:DomSanitizer,private http : HttpClient){
    
  }
  ngOnInit(): void { 
    //src/assets/content/footer/footer.html
    this.http.get('assets/content/footer/footer.html', { responseType: 'text' })
        .subscribe(html => {
          console.log(html)
          this.DynamicContent$= of(html);
        });
     //let html = this.domSanitizer.bypassSecurityTrustHtml("<p> dynamic footer</p>")
      
}

}