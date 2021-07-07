import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-sub-plan-modal',
  templateUrl: './add-sub-plan-modal.component.html',
  styleUrls: ['./add-sub-plan-modal.component.css']
})

export class AddSubPlanModalComponent implements OnInit {
  validationForm: FormGroup;

  constructor(public modalRef: MdbModalRef<AddSubPlanModalComponent>) { }

  ngOnInit(): void {
    // Validation form with null FormControls
    this.validationForm = new FormGroup({
      priority: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      title: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      description: new FormControl(null, { updateOn: 'blur' }),   // Description doesn't need a validator
      isDone: new FormControl(null)                               // Isdone doesn't need a validator
    });
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
   * A method executed when the add subplan button is clicked.
   * It passes the value calling the close method.
   *
   * @param {*} data Data of the Add Subplan form to submit.
   * @memberof AddSubPlanModalComponent
   */
  submitAddSubPlan(data) {
    // Store priority as an integer
    data.value.priority = parseInt(data.value.priority);

    // Mark the controls as touched (validate form)
    this.validationForm.markAllAsTouched();

    // If the form is valid, call the close function passing the data
    if (this.validationForm.valid) {
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
