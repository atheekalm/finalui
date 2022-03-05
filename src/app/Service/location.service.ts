import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }

  districts() {
    return this.http.get(this.baseUrl + "Location/Districts");
  }
  cities() {
    return this.http.get(this.baseUrl + "Location/Cities");
  }
}
