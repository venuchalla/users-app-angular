import { Component, OnInit } from '@angular/core';
import { ModalpageService } from '../../services/modalpage.service';
import { ModalpageChildComponent } from './modalpage-child.component';

@Component({
  selector: 'app-modalpage-route',
  standalone: true,
  imports: [],
  template: '',
})
export class ModalpageRouteComponent implements OnInit {
  constructor(private modalpageService: ModalpageService) {}

  ngOnInit() {
    this.modalpageService.openComponent(ModalpageChildComponent, 'Modal Page Example');
  }
}
