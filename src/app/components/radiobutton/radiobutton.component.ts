import { RadioService } from './radio.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { RadioOption } from './radiooption';

@Component({
  selector: 'app-radiobutton',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
  ],
  templateUrl: './radiobutton.component.html',
  styleUrl: './radiobutton.component.scss',
})
export class RadiobuttonComponent implements OnInit {
  residenceType: string = '';
  radioOptions: RadioOption[] = [];
  constructor(private radioService: RadioService) {
  }
  ngOnInit(): void {
    // You can set a default value for residenceType if needed
    this.residenceType = 'rent'; // Default to 'Rent'
    this.radioService.getRadioOptions().subscribe((options) => {
      console.log('Received radio options from API:', options);
      this.radioOptions = options.map((option: any) => ({
        value: option.value,
        viewValue: option.label,
      }));
    });
  }
  toggleResidenceType(value: string) {
    if(this.residenceType === value) {
      this.residenceType = ''; // Deselect if the same option is clicked
    } else {
      this.residenceType = value; // Select the new option
    }
  }
}
