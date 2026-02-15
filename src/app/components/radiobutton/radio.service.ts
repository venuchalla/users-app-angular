import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})              
export class RadioService {
  constructor(private httpClient:HttpClient) { }

  getRadioOptions(){
    return this.httpClient.get<any>('http://localhost:8080/props/getResidencyType');
  }
}