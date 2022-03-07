import { AppuserService } from './../Service/appuser.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  opened = false;
  profileExist: boolean;
  constructor(private appuser: AppuserService, public auth: AuthService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  checkprofileExits() {
    this.appuser.checkProfileExist(this.auth.logeduser.id).subscribe(res => {
      this.profileExist = res
    })
  }

  logout() {
    this.auth.logout();
  }
}
