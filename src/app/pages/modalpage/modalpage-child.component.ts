import { Component } from '@angular/core';

@Component({
  selector: 'app-modalpage-child',
  standalone: true,
  template: `
    <div class="modal-child">
      <h3>Modal child content</h3>
      <p>This component is rendered inside the modal page using Angular CDK portals.</p>
    </div>
  `,
})
export class ModalpageChildComponent {}
