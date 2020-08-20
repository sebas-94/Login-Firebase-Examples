import {Component, OnInit} from '@angular/core';

// Services
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user;
  public login;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getLoginUser();

    this.user.subscribe(user => {
      this.login = user;
    });
  }


}
