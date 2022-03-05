import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  profiles: any;
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getprofiles()
  }

  getprofiles() {
    this.http.get('https://localhost:5001/api/Service/Services').subscribe(res => {
      this.profiles = res
    }, error => {
      console.log(error)
    })
  }

}
