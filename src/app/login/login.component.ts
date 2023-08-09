import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title : string = "login form"
  imgUrl : string = "https://o.remove.bg/downloads/9572cbd9-fc7f-47af-a01d-5b757de75b8c/corporate-user-icon-removebg-preview.png"
 
  userName : string=""
  password : string=""
  userNameChange(event:any){
console.log(`username:`,event.target.value);
this.userName = event.target.value

  }
  passwordChanger(event:any){
    console.log(`password:`,event.target.value);
    this.password = event.target.value
    

  }
  login(){
    if(this.userName && this.password){
      alert(`username : ${this.userName},password : ${this.password}`)
    }
    else{
      alert(`please enter the inputs`)
    }

  }

}
