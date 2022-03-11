import { AppuserService } from './../../Service/appuser.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/Models/profile';
import { Pagination } from 'src/app/Models/pagination';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  profiles: Profile[];
  pagination:Pagination;
  PageNumber:1;
  PageSize:3;

  constructor(private http: HttpClient, private appuser: AppuserService) { }


  ngOnInit() {
    this.getprofiles();
  }

  getprofiles() {
    this.appuser.getprofiles(this.PageNumber,this.PageSize).subscribe(response => {
      this.profiles = response.result;
      this.pagination = response.pagination
    }, error => {
      console.log(error)
    })
  }

}
