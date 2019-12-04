import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserRegBuisnessServiceService } from '../user-reg-buisness-service.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

  angForm: FormGroup;
  showUserregForm: boolean = true;

  constructor(private fb: FormBuilder, private userservice: UserRegBuisnessServiceService) {
    this.createForm();
  }

  ngOnInit() {
  }

 createForm() {
    this.angForm = this.fb.group({
      userName: [''],
      password: [''],
      lastName: [''],
      firstName:[''],
      email: [''],
      age: [''],
      streetAddress: [''],
      city: [''],
      zipcode: [''],
      state: [''],
      country: [''],
    });
  }

  registerUser(userName,password,lastName,firstName,email,age,streetAddress,city,zipcode,state,country) {
  	this.userservice.registerUser(userName,password,lastName,firstName,email,age,streetAddress,city,zipcode,state,country).
    subscribe(res => {
                      this.showUserregForm = false;
                     }
              );
  }
 

 }

