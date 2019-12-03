import { Injectable, Component, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() getLoggedInName: EventEmitter<string> = new EventEmitter();


  constructor() { }

  setUserTOSession(userName:string){
    console.log("before emit"),
    this.getLoggedInName.emit(userName); 
    console.log("after emit");       
  }
}
