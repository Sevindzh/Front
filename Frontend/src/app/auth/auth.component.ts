import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email = ""
  password = ""
  result:string | null = "error"
  isLogIn = false
  constructor(private _authservice: AuthService) { }

  Login() {
    this.result = this._authservice.login(this.email, this.password);
    console.log(localStorage.getItem('auth_token'));
    this.CheckResult();
  }
  CheckResult(){
    if (this.result != "error")
      this.isLogIn = true;
    else
      this.isLogIn = false;
  }
  ngOnInit(): void {
    this.CheckResult();
  }

}
