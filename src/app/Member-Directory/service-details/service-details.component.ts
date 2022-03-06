import { Profile } from 'src/app/Models/profile';
import { AppuserService } from './../../Service/appuser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})

export class ServiceDetailsComponent implements OnInit {
  profile: Profile;
  constructor(private appuser: AppuserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getprofile();
  }

  getprofile() {
    this.appuser.getprofile(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(spro => {
      this.profile = spro;
    })
  }
}
