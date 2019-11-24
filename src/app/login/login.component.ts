import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserRegBuisnessServiceService } from '../user-reg-buisness-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 loginForm: FormGroup;
 errorMessageExists: boolean=false;
 errorMessage: String = "";

constructor(private fb: FormBuilder, private userservice: UserRegBuisnessServiceService,private router: Router) {
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
                      console.log("done"),
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
