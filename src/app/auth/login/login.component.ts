import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  f: FormGroup;
  username : string = '';
  password : string = '';
  errorCredentials  = false;
  title : string = environment.title;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { 
  }

  ngOnInit() {
    this.f = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onUsernameInput(event : Event ) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onPasswordInput(event : Event ) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  onSubmit() {
    this.authService.login(this.f.value).subscribe(
      (resp) => { 
        this.router.navigate(['panel/main']); 
      },
      (errorResponse: HttpErrorResponse) => { 
        console.log(errorResponse);
        if (errorResponse.status === 401) {
          this.errorCredentials = true;
        }
      }
    ) 
    //
  }
}
