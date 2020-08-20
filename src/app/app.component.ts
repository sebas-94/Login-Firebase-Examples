import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Login-Firebase-Examples';
  public user;
  public noUserImg: string;
  public login;

  constructor(public authService: AuthService) {
    this.noUserImg = 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Solid_gray.png';
  }

  ngOnInit(): void {
    this.user = this.authService.getLoginUser();

    this.user.subscribe(user => {
      this.login = user;
      console.log(user);
    });
  }
}
