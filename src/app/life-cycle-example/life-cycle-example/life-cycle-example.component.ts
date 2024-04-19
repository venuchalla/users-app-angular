import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-life-cycle-example',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './life-cycle-example.component.html',
  styleUrl: './life-cycle-example.component.scss',
})
export class LifeCycleExampleComponent {
  constructor(titleService: Title) {
    titleService.setTitle('life-cycle-example');
  }
}
