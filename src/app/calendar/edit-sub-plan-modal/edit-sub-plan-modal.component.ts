import { Utils } from 'src/app/services/Utils';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Plan, SubPlan } from 'src/app/models/plan.model';

@Component({
  selector: 'app-edit-sub-plan-modal',
  templateUrl: './edit-sub-plan-modal.component.html',
  styleUrls: ['./edit-sub-plan-modal.component.css']
})
export class EditSubPlanModalComponent implements OnInit {
  plan: Plan;
  validationForm: FormGroup;
  subPlan: SubPlan;

  constructor(public modalRef: MdbModalRef<EditSubPlanModalComponent>) { }

  ngOnInit(): void {
    // Get current subplan using the Utils' static method
    this.subPlan = Utils.getSubPlan();
    if (this.subPlan) {
      // Create a new object of FormGroup using the subplan data
      this.validationForm = new FormGroup({
        priority: new FormControl(this.subPlan.priority, { validators: Validators.required, updateOn: 'blur' }),
        title: new FormControl(this.subPlan.title, { validators: Validators.required, updateOn: 'blur' }),
        description: new FormControl(this.subPlan.description, { updateOn: 'blur' }),
        isDone: new FormControl(this.subPlan.isDone)
      });
    }
  }

  get priority(): AbstractControl {
    return this.validationForm.get('priority');
  }

  get title(): AbstractControl {
    return this.validationForm.get('title');
  }

  get description(): AbstractControl {
    return this.validationForm.get('description');
  }

  get isDone(): AbstractControl {
    return this.validationForm.get('isDone');
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
    this.validationForm.markAllAsTouched();

    // If the form is valid, close the modal sending the data
    if (this.validationForm.valid) {
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
