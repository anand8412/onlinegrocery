import { OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserRegBuisnessServiceService } from '../user-reg-buisness-service.service';
import {Router} from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 loginForm: FormGroup;
 errorMessageExists: boolean=false;
 errorMessage: String = "";

constructor(private userservice1: UserService,private fb: FormBuilder, private userservice: UserRegBuisnessServiceService,
                      private router: Router) {
    this.createForm();
  }

   createForm() {
    this.loginForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

  authenticateUser(userName,password) {
  	this.userservice.authenticateUser(userName,password).
    subscribe(res => {
                      this.userservice1.setUserTOSession(userName);
                      this.router.navigate(['/products']);
                     },
              err => {
              		   console.log('HTTP Error', err),
              		  this.errorMessageExists = true,
              		  this.errorMessage = err.error.errorMessage
              		  }
              );
  }

  ngOnInit() {
  }


}
