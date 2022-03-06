import { AppuserService } from './../../Service/appuser.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/Models/profile';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  profiles: Profile[];
  constructor(private http: HttpClient, private appuser: AppuserService) { }


  ngOnInit() {
    this.getprofiles();
  }

  getprofiles() {
    this.appuser.getprofiles().subscribe(profile => {
      this.profiles = profile
    }, error => {
      console.log(error)
    })
  }

}
