import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City, District } from '../Models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getdistricts() {
    return this.http.get<District[]>(this.baseUrl + "Location/Districts");
  }
  getcities() {
    return this.http.get<City[]>(this.baseUrl + "Location/Cities");
  }
}
