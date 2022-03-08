import { Utils } from 'src/app/services/Utils';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Plan, SubPlan } from 'src/app/models/plan.model';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-edit-sub-plan-modal',
  templateUrl: './edit-sub-plan-modal.component.html',
  styleUrls: ['../add-plan/add-plan.component.css', './edit-sub-plan-modal.component.css']
})
export class EditSubPlanModalComponent implements OnInit {
  plan: Plan;
  validationForm: FormGroup;
  subPlan: SubPlan;

  constructor(public modalRef: MdbModalRef<EditSubPlanModalComponent>, private utils: Utils) { }

  ngOnInit(): void {
    // Get current subplan using the Utils' static method
    this.subPlan = Utils.getSubPlan();
    if (this.subPlan) {
      // Create a new object of FormGroup using the subplan data
      this.validationForm = new FormGroup({
        modalPriority: new FormControl(this.subPlan.priority.toString()),
        modalTitle: new FormControl(this.subPlan.title),
        modalDescription: new FormControl(this.subPlan.description),
        modalIsDone: new FormControl(this.subPlan.isDone)
      });
    }
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
   * Submit the updated value of the subplan form and call the close method.
   *
   * @param {*} data form data to submit.
   * @memberof EditSubPlanModalComponent
   */
  submitEditSubPlan(data) {
    // Store the priority as an integer
    data.value.priority = parseInt(data.value.priority);

    // If the form is valid, close the modal sending the data
    if (this.validateInputs(data.value)) {
      this.close(data.value);
    }
  }

  /**
   * Send 0 when the modal is closed to delete the subplan.
   *
   * @memberof EditSubPlanModalComponent
   */
  deleteAndClose() {
    this.modalRef.close(0);
  }

  /**
   * Close the modal passing the data.
   *
   * @param {*} data Data to send when closing the modal.
   * @memberof EditSubPlanModalComponent
   */
  close(data): void {
    if (data) {   // if the data exists, close the modal sending passed data
      this.modalRef.close(data);
    }
  }
}
