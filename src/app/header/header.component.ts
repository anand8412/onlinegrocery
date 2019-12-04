import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  subscription: Subscription;
  message:string;
  userName: string = null;
  

  constructor(private userservice1: UserService,private router: Router) { 
    //this.userName = localStorage.getItem('currentUser');
    
  }

  ngOnInit() {
    this.userservice1.getLoggedInName.subscribe(name => this.changeName(name));
  }

    private changeName(name: string): void {
        this.userName = name;  
    }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout(){
    this.userName=null;
    this.router.navigate(['/']);
  }
}
