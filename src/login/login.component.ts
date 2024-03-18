// login.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl,} from '@angular/forms';
import { LoginService } from '../app/login.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  constructor( private router:Router , private auth:AuthGuard) { }
  private loginservice =inject(LoginService);
  ngOnInit(): void {
  }


  onSubmit() {
    if (this.loginform.valid) {
      const payload = this.loginform.value;
      this.loginservice.login(payload).subscribe(
        (res: any) => {
          console.log(res);
          this.auth.setAuthenticated(true);
          this.router.navigate(['/home']);
        }
      );
    }
  }
}
