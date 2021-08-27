import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { Utils } from 'src/app/services/Utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validationForm: FormGroup;
  passwordInput: HTMLInputElement;
  emailInput: HTMLInputElement;

  constructor(private utils: Utils, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Check whether the user is already logged in
    this.userService.isAuthenticated().then((authenticated) => {
      if(authenticated) {
        // If already logged in, navigate to the home page
        this.router.navigate(['']);
      }
    });

    // Login form
    this.validationForm = new FormGroup({
      password: new FormControl(null),
      email: new FormControl(null)
    });

    // Checkbox to show or hide the password
    let showPwCheckbox = <HTMLInputElement>document.querySelector('#cbShowPassword');
    // EventListener on click (Show or hide password)
    showPwCheckbox.addEventListener('click', () => {
      if (showPwCheckbox.checked) this.passwordInput.type = 'text';
      else this.passwordInput.type = 'password';
    });

    // Get input elements
    this.passwordInput = <HTMLInputElement>document.querySelector('#pwPassword');
    this.emailInput = <HTMLInputElement>document.querySelector('#elEmail');
  }

  /**
   * Register a user when the form is submitted.
   *
   * @param {FormGroup} form Form value to insert.
   * @memberof LoginComponent
   */
   login(form: FormGroup) {
    // Get the data and set the value
    let data = form.value;
    // Validate inputs and return if any data is invalid
    if (!this.validateInputs(data))
      return;

    this.userService.tryLogin(data);
  }

  get password(): AbstractControl {
    return this.validationForm.get('password');
  }

  get email(): AbstractControl {
    return this.validationForm.get('email');
  }

  /**
   * Check if every input is filled and display error message for the empty inputs.
   *
   * @param {*} formData Form data to check for the empty input.
   * @return {*}  {boolean} Return true if every input is valid.
   * @memberof RegisterComponent
   */
   validateInputs(formData: any): boolean {
    // If data's property is null or empty, store false
    let isPasswordValid = formData.password != null && formData.password != '';
    let isEmailValid = formData.email != null && formData.email != '';

    this.utils.changeInputStatus(this.passwordInput, null, isPasswordValid);
    this.utils.changeInputStatus(this.emailInput, null, isEmailValid);
    // this.utils.showFlash('Plese complete the form.', 'flash-login');
    // Check whether the input is valid and add or remove the class 'invalid'

    // If any of input is invalid, return false
    if (!isPasswordValid || !isEmailValid) return false;
    // Otherwise, return true
    return true;
  }

}
