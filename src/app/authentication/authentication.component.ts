import { Router, Routes } from '@angular/router';
import { AuthService } from './../Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {

  model: any = {};
  loggedIn: boolean = true;
  constructor(private auth: AuthService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
  }


  login() {
    this.auth.userlogin(this.model).subscribe(res => {
      this.router.navigateByUrl('/');
    }, error => {
      this.toast.error(error.error);
    })
  }




}