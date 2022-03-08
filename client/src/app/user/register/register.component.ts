import { UserService } from './../../services/user/user.service';
import { Utils } from './../../services/Utils';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css', './register.component.css']
})
export class RegisterComponent implements OnInit {
  validationForm: FormGroup;
  passwordInput: HTMLInputElement;
  firstNameInput: HTMLInputElement;
  lastNameInput: HTMLInputElement;
  emailInput: HTMLInputElement;

  constructor(private utils: Utils, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Check whether the user is already logged in
    this.userService.isAuthenticated().then((authenticated) => {
      if (authenticated) {
        // Navigate to the home page if already logged in
        this.router.navigate(['']);
      }
    });

    // Register form
    this.validationForm = new FormGroup({
      password: new FormControl(null),
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null)
    });

    // Get all input elements and password rule ul
    this.passwordInput = <HTMLInputElement>document.querySelector('#pwPassword');
    this.firstNameInput = <HTMLInputElement>document.querySelector('#txtFirstName');
    this.lastNameInput = <HTMLInputElement>document.querySelector('#txtLastName');
    this.emailInput = <HTMLInputElement>document.querySelector('#elEmail');
    let pwRulesUl = <HTMLElement>document.querySelector('ul.pw-rules');

    // Checkbox to show or hide the password
    let showPwCheckbox = <HTMLInputElement>document.querySelector('#cbShowPassword');

    // EventListener on click (Show or hide password)
    showPwCheckbox.addEventListener('click', () => {
      if (showPwCheckbox.checked) this.passwordInput.type = 'text';
      else this.passwordInput.type = 'password';
    });

    // Display the password rules ul
    let showPwGuide = () => {
      if (!pwRulesUl.classList.contains('d-block')) {
        pwRulesUl.classList.add('d-block');
      }
      pwRulesUl.classList.remove('d-none');
    };

    // Hide the password rules ul
    let hidePwGuide = () => {
      if (!pwRulesUl.classList.contains('d-none')) {
        pwRulesUl.classList.add('d-none');
      }
      pwRulesUl.classList.remove('d-block');
    };

    // Add onfocus event listener to each input to show or hide the password guide ul
    this.passwordInput.addEventListener('focus', showPwGuide, this.validatePassword());

    // password guide ul gets hidden when the input other than password is focused
    this.firstNameInput.addEventListener('focus', hidePwGuide);
    this.lastNameInput.addEventListener('focus', hidePwGuide);
    this.emailInput.addEventListener('focus', hidePwGuide);

    // When anything is input to the password input, validate it to update the password guide ul
    this.passwordInput.addEventListener('input', () => {
      this.validatePassword();
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
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // If data's property is null or empty, store false
    let isFirstNameValid = formData.firstname != null && formData.firstname !== '';
    let isLastNameValid = formData.lastname != null && formData.lastname !== '';
    let isPasswordValid = formData.password != null && formData.password != '' && this.validatePassword();
    let isEmailValid = formData.email != null && formData.email != '' && formData.email.match(emailRegex);

    // this.utils.showFlash('Plese complete the form.', 'flash-login');
    // Check whether the input is valid and add or remove the class 'invalid'
    this.utils.changeInputStatus(this.passwordInput, null, isPasswordValid);
    this.utils.changeInputStatus(this.firstNameInput, null, isFirstNameValid);
    this.utils.changeInputStatus(this.lastNameInput, null, isLastNameValid);
    this.utils.changeInputStatus(this.emailInput, null, isEmailValid);

    // If any of input is invalid, return false
    if (!isPasswordValid || !isFirstNameValid || !isLastNameValid || !isEmailValid) return false;
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
    // Get the data and set the value
    let data = form.value;
    // Validate inputs and return if any data is invalid
    if (!this.validateInputs(data))
      return;

    // Create a Plan object using JSON
    let newUser = JSON.parse(JSON.stringify(data));
    // Add the plan using the Plan service
    this.userService.addUser(newUser).subscribe(data => {
      // Navigate to login page
      this.router.navigate([`verify/${newUser.email}`]);
    });
  }

  /**
   * Validate if below conditions are satisfied.
   * - Not contain email, first name or last name.
   * - Length should be between 8 and 15.
   * - Contain uppercase, lowercase and number.
   * - Contains at least 1 special character.
   *
   * @return {*}  {boolean} Return true only if all the conditions are satisfied.
   * @memberof RegisterComponent
   */
  validatePassword(): boolean {
    // Get values from the input
    let password = this.passwordInput.value;
    let firstname = this.firstNameInput.value;
    let lastname = this.lastNameInput.value;
    let email = this.emailInput.value;

    // Get all li elements
    let pwRuleItems = <NodeListOf<HTMLElement>>document.querySelectorAll('.pw-rules li');

    // Password does not contain email, first name or last name
    let rule1 = !this.utils.strIncludesStr(password, email, 4) &&
      !this.utils.strIncludesStr(password, firstname, 4) &&
      !this.utils.strIncludesStr(password, lastname, 4);
    // Password length is between 8 and 15
    let rule2 = password.length >= 8 && password.length <= 15;
    // Password contains uppercase, lowercase and number
    let rule3 = password.match(/(?=.{8,15}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g) != null;
    // Password contains at least 1 special character
    let rule4 = password.match(/(?=.*[!@#$%^&*]).*$/g) != null;

    // If the password satisfies the condition, change the status of list item (fail -> success or vice versa)
    this.changeLiStatus(pwRuleItems[0], rule1);
    this.changeLiStatus(pwRuleItems[1], rule2);
    this.changeLiStatus(pwRuleItems[2], rule3);
    this.changeLiStatus(pwRuleItems[3], rule4);

    // If all conditions are satisfied, return true
    if (rule1 && rule2 && rule3 && rule4) {
      return true;
    }
    // Otherwise, return false
    return false;
  }

  /**
   * Change the status of the ul>li element's status to
   * (success -> fail) or (fail -> success)
   *
   * @param {HTMLElement} listEl li element in the ul to change the status.
   * @param {boolean} isValid If true, icon changed from times to checkmark and text colour changed red to green.
   * @memberof RegisterComponent
   */
  changeLiStatus(listEl: HTMLElement, isValid: boolean) {
    // Get the icon in the list
    let icon = listEl.querySelector('i');
    if (isValid) {  // If valid
      if (!listEl.classList.contains('text-success'))
        // Add the class only when the li does not contain it
        listEl.classList.add('text-success');
      // change the icon from times to checkmark
      icon.classList.remove('fa-times-circle');
      icon.classList.add('fa-check-circle');
    }
    else {
      // Change the text color to red
      listEl.classList.remove('text-success');
      // change the icon from checkmark to times
      icon.classList.add('fa-times-circle');
      icon.classList.remove('fa-check-circle');
    }
  }
}
