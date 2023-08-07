import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title : string = "login form"
  imgUrl : string = "https://o.remove.bg/downloads/31820fae-b975-4ca7-860e-009c998e02c2/free-user-group-icon-296-thumb-removebg-preview.png"
  login(){
    alert(`login clicked`)
  }


}
