import { Component, OnInit } from '@angular/core';

import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }


  loginState(): string {
    if (this.auth.authenticated()) {
      return 'ログインしています。';
    } else {
      return 'ログインしていません。';
    }
  }

}
