import { Injectable } from '@angular/core';

import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private routerService: Router) {

  }

  canActivate() {
    /*const identity = this.userService.getIdentity();

    if (identity) {
      return true;
    } else {
      this.router.navigate(['/error']);
      return false;
    */

    return true;
    }
}
