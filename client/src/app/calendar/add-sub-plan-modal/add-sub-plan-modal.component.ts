import { Utils } from 'src/app/services/Utils';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-add-sub-plan-modal',
  templateUrl: './add-sub-plan-modal.component.html',
  styleUrls: ['../add-plan/add-plan.component.css', './add-sub-plan-modal.component.css']
})

export class AddSubPlanModalComponent implements OnInit {
  validationForm: FormGroup;

  constructor(public modalRef: MdbModalRef<AddSubPlanModalComponent>, private utils: Utils) { }

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      modalPriority: new FormControl(null),
      modalTitle: new FormControl(null),
      modalDescription: new FormControl(null),
      modalIsDone: new FormControl(null)
    });
  }

  get modalPriority(): AbstractControl {
    return this.validationForm.get('modalPriority');
  }

  get modalTitle(): AbstractControl {
    return this.validationForm.get('modalTitle');
  }

  get modalDescription(): AbstractControl {
    return this.validationForm.get('modalDescription');
  }

  get modalIsDone(): AbstractControl {
    return this.validationForm.get('modalIsDone');
  }

  /**
   * Check if the required inputs are filled and display error message for the empty inputs.
   *
   * @param {*} formData Form data to check for the empty input.
   * @return {*}  {boolean} Return true if all required inputs are valid.
   * @memberof AddPlanComponent
   */
  validateInputs(formData: any): boolean {
    // Get input elements
    let titleInput = <HTMLInputElement>document.querySelector('#modal-inputTitle');

    // Get error message elements
    let titleError = <HTMLElement>document.querySelector('.title.modal-error-msg');
    let priorityError = <HTMLElement>document.querySelector('.priority.modal-error-msg');

    // If data's property is null or empty, store false
    let isTitleValid = formData.modalTitle != null && formData.modalTitle !== '';
    let isPriorityValid = formData.modalPriority != null && formData.modalPriority !== '' && !isNaN(formData.modalPriority);

    // Check whether the input is valid and add or remove the class 'invalid'
    this.utils.changeInputStatus(titleInput, titleError, isTitleValid);
    this.utils.changeInputStatus(null, priorityError, isPriorityValid);

    // If any of input is invalid, return false
    if (!isTitleValid || !isPriorityValid)
      return false;
    // Otherwise, return true
    return true;
  }

  /**
   * A method executed when the add subplan button is clicked.
   * It passes the value calling the close method.
   *
   * @param {*} data Data of the Add Subplan form to submit.
   * @memberof AddSubPlanModalComponent
   */
  submitAddSubPlan(data) {
    // Store priority as an integer
    data.value.priority = parseInt(data.value.titlePriority);

    // If the form is valid, call the close function passing the data
    if (this.validateInputs(data.value)) {
      this.close(data.value);
    }
  }

  /**
   * Close the Add Subplan modal.
   *
   * @param {*} data Data to return when closing
   * @memberof AddSubPlanModalComponent
   */
  close(data): void {
    if (data) {   // If the data exists
      this.modalRef.close(data);
    }
  }
}
