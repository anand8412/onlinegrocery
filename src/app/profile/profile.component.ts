import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserRegBuisnessServiceService } from '../user-reg-buisness-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName:string=null;
  userDetail:any=null;
  userProfileForm: FormGroup;
  userMessage:string=null;

  constructor(private fb: FormBuilder, activatedRoute: ActivatedRoute,  private userservice: UserRegBuisnessServiceService) { 
    this.userMessage=null;
    this.userName = activatedRoute.snapshot.paramMap.get("userName");
    this.getUserDetails(this.userName);
  }
  

 createForm(userDetail:any) {
  this.userProfileForm = this.fb.group({
    userName: [userDetail.userName],
    password: [userDetail.password],
    lastName: [userDetail.lastName],
    firstName:[userDetail.firstName],
    email: [userDetail.email],
    age: [userDetail.age],
    streetAddress: [userDetail.streetAddress],
    city: [userDetail.city],
    zipcode: [userDetail.zipcode],
    state: [userDetail.state],
    country: [userDetail.country],
  });
}

  ngOnInit() {
  }

  getUserDetails(userName:string){
    this.userservice.getUserDetails(userName).
    subscribe(res => {
                      console.log(res);
                      this.userDetail = res;
                      this.createForm(this.userDetail);
                     }
              );

  }

  updateUser(userName,password,lastName,firstName,email,age,streetAddress,city,zipcode,state,country,id) {
  	this.userservice.updateUser(userName,password,lastName,firstName,email,age,streetAddress,city,zipcode,state,country,id).
    subscribe(res => {
                      console.log('anand..')
                      this.createForm(res);
                      this.userMessage="user updated successfully";
                     }
              );
  }

}
