import { Injectable } from '@angular/core';
import {User} from "../login/user";

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn=false;
  login(user:User):boolean{
    if(user.userName=="Ali"&&user.password=="12345"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.userName)
      return true;
    }
    return false
  }
  isLoggedIn(){//gerçekten sisteme giriş yapmış mı yoksa sistemde gözükmüyor mu kontrolü
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged")
    this.loggedIn=false;
  }
}
