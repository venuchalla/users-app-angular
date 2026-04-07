import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})              
export class RadioService {
  constructor(private httpClient:HttpClient) { }

  getRadioOptions(){
    //return this.httpClient.get<any>('http://localhost:8080/props/getResidencyType');
    return of([
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ]); 
  }
}