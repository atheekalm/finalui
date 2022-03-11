import { map } from 'rxjs/operators';
import { PaginatedResult } from './../Models/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class AppuserService {
  baseUrl = environment.apiUrl;
  profile: Profile[] = [];
  paginatedResult: PaginatedResult<Profile[]> = new PaginatedResult<Profile[]>();

  constructor(private http: HttpClient) { }

  getprofiles(page?: number, itemsperPage?: number) {
    let params = new HttpParams();

    if (page !== undefined && itemsperPage !== undefined) {
        params = params.append('PageNumber', page.toString()),
        params = params.append('PageSize', itemsperPage.toString())
    }

    return this.http.get<Profile[]>(this.baseUrl + 'Service/Services', { observe: 'response', params }).pipe(
      map(response => {
        this.paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
          this.paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'))
        }
        return this.paginatedResult;
      })
    );
  }




  getprofile(id: number) {
    return this.http.get<Profile>(this.baseUrl + "Service/" + id)
  }
  getprofilebyid(id: number) {
    return this.http.get<Profile>(this.baseUrl + "Service/myprofile/" + id)
  }


  checkProfileExist(id: number) {
    return this.http.get<boolean>(this.baseUrl + 'LoggedUser/CheckProfileExist/' + id)
  }

}