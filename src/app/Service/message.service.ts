import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { getPaginatedResult, getPaginationHeaders } from './paginationhelper';
import { Message } from '../Models/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }



  getMessages(pageNumber, pageSize, container) {
    let params = getPaginationHeaders(pageNumber, pageSize);
    params = params.append('Container', container);
    return getPaginatedResult<Message[]>(this.baseUrl + 'Message', params, this.http);
  }


  deleteMessage(id: number) {
    return this.http.delete(this.baseUrl + 'Message/' + id);
  }

}
