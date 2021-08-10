import { UserService } from './../../services/user/user.service';
import { PlanService } from './../../services/plan/plan.service';
import { Utils } from './../../services/Utils';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css', './register.component.css']
})
export class RegisterComponent implements OnInit {
  validationForm: FormGroup;

  constructor(private utils: Utils, private userService: UserService) { }

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      password: new FormControl(null),
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null)
    });

    let pwContainer = <HTMLInputElement>document.querySelector('#pwPassword');
    let eyeIcon = document.querySelector('.password-eye');
    eyeIcon.addEventListener('mousedown', () => {
      pwContainer.type = 'text';
    });
    eyeIcon.addEventListener('mouseup', () => {
      pwContainer.type = 'password';
    });
  }

  get password(): AbstractControl {
    return this.validationForm.get('password');
  }

  get firstname(): AbstractControl {
    return this.validationForm.get('firstname');
  }

  get lastname(): AbstractControl {
    return this.validationForm.get('lastname');
  }

  get email(): AbstractControl {
    return this.validationForm.get('email');
  }

  /**
   * Check if every input is filled and display error message for the empty inputs.
   *
   * @param {*} formData Form data to check for the empty input.
   * @return {*}  {boolean} Return true if every input is valid.
   * @memberof AddPlanComponent
   */
  validateInputs(formData: any): boolean {
    let passwordInput = <HTMLInputElement>document.querySelector('#pwPassword');
    let firstNameInput = <HTMLInputElement>document.querySelector('#txtFirstName');
    let lastNameInput = <HTMLInputElement>document.querySelector('#txtLastName');
    let emailInput = <HTMLInputElement>document.querySelector('#elEmail');

    // Get error message elements
    let passwordError = <HTMLElement>document.querySelector('.password.error-msg');
    let firstNameError = <HTMLElement>document.querySelector('.firstname.error-msg');
    let lastNameError = <HTMLElement>document.querySelector('.lastname.error-msg');
    let emailError = <HTMLElement>document.querySelector('.email.error-msg');

    // If data's property is null or empty, store false
    let isFirstNameValid = formData.firstname != null && formData.firstname !== '';
    let isLastNameValid = formData.lastname != null && formData.lastname !== '';
    /**
     * IMPORTANT:
     * Need Username & Password & Email validation
     */
    let isPasswordValid = formData.password != null && formData.password !== '';
    let isEmailValid = formData.email != null && formData.email !== '';

    // Check whether the input is valid and add or remove the class 'invalid'
    this.utils.changeInputStatus(passwordInput, passwordError, isPasswordValid);
    this.utils.changeInputStatus(firstNameInput, firstNameError, isFirstNameValid);
    this.utils.changeInputStatus(lastNameInput, lastNameError, isLastNameValid);
    this.utils.changeInputStatus(emailInput, emailError, isEmailValid);

    // If any of input is invalid, return false
    if (!isPasswordValid || !isFirstNameValid || !isLastNameValid || !isEmailValid)
      return false;
    // Otherwise, return true
    return true;
  }

  /**
   * Register a user when the form is submitted.
   *
   * @param {FormGroup} form Form value to insert.
   * @memberof AddPlanComponent
   */
  registerUser(form: FormGroup) {
    console.log('trying to register the user!');

    // Get the data and set the value
    let data = form.value;

    // Validate inputs and return if any data is invalid
    if (!this.validateInputs(data))
      return;

    // Create a Plan object using JSON
    let newUser = JSON.parse(JSON.stringify(data));

    // Add the plan using the Plan service
    this.userService.addUser(newUser).subscribe(data => {
      this.ngOnInit();

      // Reset the form
      form.reset();
    });
  }
}
