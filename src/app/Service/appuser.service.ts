import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class AppuserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getprofile(id: number) {
    return this.http.get<Profile>(this.baseUrl + "Service/" + id)
  }
  getprofilebyid(id: number) {
    return this.http.get<Profile>(this.baseUrl + "Service/myprofile/" + id)
  }

  getprofiles() {
    return this.http.get<Profile[]>(this.baseUrl + 'Service/Services');
  }

  checkProfileExist(id: number) {
    return this.http.get<boolean>(this.baseUrl + 'LoggedUser/CheckProfileExist/' + id)
  }

}