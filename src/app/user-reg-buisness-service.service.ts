import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegBuisnessServiceService {

  constructor(private http: HttpClient) { }


   registerUser(userName,password,lastName,firstName,email,age,streetAddress,city,zipcode,state,country) {

   	console.log(userName);
    console.log(password);
    console.log(lastName);
    console.log(firstName);
    console.log(email);
    console.log(age);
    console.log(streetAddress);
    console.log(city);
    console.log(zipcode);
    console.log(state);
    console.log(country);
    
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

    this.http.post(`http://localhost:8080/reguser`, obj)
        .subscribe(res => console.log('Done'));
  }
}
