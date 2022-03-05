import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../Service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthService, private toast: ToastrService) { }

  canActivate(): Observable<boolean> {
    return this.auth.currentUser$.pipe(
      map(user => {
        if (user) return true;
        this.toast.error("something went wrong")
        return false;
      })
    );
  }

}
