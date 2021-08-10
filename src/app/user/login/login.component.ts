import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let pwContainer = <HTMLInputElement>document.querySelector('#pwPassword');
    let eyeIcon = document.querySelector('.password-eye');
    eyeIcon.addEventListener('mousedown', () => {
      pwContainer.type = 'text';
    });
    eyeIcon.addEventListener('mouseup', () => {
      pwContainer.type = 'password';
    });
  }

}
