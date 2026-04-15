import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-input-with-tooltip',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTooltipModule],
  templateUrl: './input-with-tooltip.component.html',
  styleUrl: './input-with-tooltip.component.scss'
})
export class InputWithTooltipComponent {
  @Input() label: string = 'Input';
  @Input() placeholder: string = '';
  @Input() tooltipText: string = 'This is a tooltip';
  @Input() tooltipPosition: 'above' | 'below' | 'left' | 'right' = 'above';
}