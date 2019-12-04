import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegBuisnessServiceService {

  constructor(private http: HttpClient) { }


 authenticateUser(userName,password) {
   
    const obj = {
      userName: userName,
      password: password
    };
    return  this.http.post(`http://localhost:8080/authenticateUser`, obj);
  }

  getUserDetails (userName:String){
    return this.http.get(`http://localhost:8080/getUserDetails?userName=` + userName );
 }

   registerUser(userName,password,lastName,firstName,email,age,streetAddress,city,zipcode,state,country) {
    const obj = {
      userName: userName,
      password: password,
      lastName: lastName,
      firstName: firstName,
      email: email,
      age: age,
      streetAddress: streetAddress,
      city: city,
      zipcode: zipcode,
      state: state,
      country: country,
    };

    return  this.http.post(`http://localhost:8080/signup`, obj);
  }

  updateUser(userName,password,lastName,firstName,email,age,streetAddress,city,zipcode,state,country,id) {
    const obj = {
      id:id,
      userName: userName,
      password: password,
      lastName: lastName,
      firstName: firstName,
      email: email,
      age: age,
      streetAddress: streetAddress,
      city: city,
      zipcode: zipcode,
      state: state,
      country: country,
    };

    return  this.http.post(`http://localhost:8080/signup`, obj);
  }

}
