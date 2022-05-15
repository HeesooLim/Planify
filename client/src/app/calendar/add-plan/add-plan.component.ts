import { UserService } from 'src/app/services/user/user.service';
import { SubPlan } from './../../models/plan.model';
import { PlanDate } from 'src/app/models/plan-date.model';
import { PlanService } from './../../services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/services/Utils';
import { AddSubPlanModalComponent } from '../add-sub-plan-modal/add-sub-plan-modal.component';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Plan } from 'src/app/models/plan.model';
import { EditSubPlanModalComponent } from '../edit-sub-plan-modal/edit-sub-plan-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {
  addModalRef: MdbModalRef<AddSubPlanModalComponent>;
  editModalRef: MdbModalRef<EditSubPlanModalComponent>;
  validationForm: FormGroup;

  // Fixed date (chosen at first)
  selectedDate: Date;
  selectedDateString: string;
  selectedPlan = new Plan(null, null, null, null, null, 0, 0);

  // Date for the plans on another day (the section on the right side)
  otherPlanDate: Date;
  otherDateString: string;
  otherPlan: PlanDate;

  constructor(private route: ActivatedRoute, private userService: UserService, private planService: PlanService, private utils: Utils, private modalService: MdbModalService) { }

  ngOnInit(): void {
    // Check if the user is logged in
    this.userService.isAuthenticated();

    // Create a FormGroup object (empty FormControls)
    this.validationForm = new FormGroup({
      dueDate: new FormControl(null),
      priority: new FormControl(null),
      title: new FormControl(null),
      description: new FormControl(null)
    });

    // Get the parameter from the URL
    const routeParams = this.route.snapshot.paramMap;

    // Get the date from the parameter
    const yearString = parseInt(routeParams.get('year'));
    const monthString = parseInt(routeParams.get('month'));
    const dateString = parseInt(routeParams.get('date'));

    // Split the date by '-' and create a new Date with it
    // let dates = dateString.split('-');
    this.selectedDate = new Date(yearString, monthString - 1, dateString);

    // Set the selected date string
    this.selectedDateString = this.utils.getDateString(this.selectedDate, false);

    // If there is no chosend date for another day, assign the selected date initially
    if (this.otherPlanDate == null) {
      this.otherPlanDate = this.selectedDate;
    }

    // Create the PlanDate object using the variable otherPlanDate value
    this.otherPlan = new PlanDate(this.otherPlanDate.getFullYear(), this.otherPlanDate.getMonth(), this.otherPlanDate.getDate());

    // Get the plan on the day using the value of the otherPlanDate
    this.planService.getDataByDate(this.otherPlanDate).subscribe(res => {
      this.otherPlan = this.utils.getPlanDate(res.body, this.otherPlanDate);
    });

    // Set the string of the date
    this.otherDateString = this.utils.getDateString(this.otherPlanDate, false);
  }

  get dueDate(): AbstractControl {
    return this.validationForm.get('dueDate');
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

  /**
   * Change the chosen date for the preview of other day's plans section.
   *
   * @param {boolean} isNextDay If the value is true, add a day to current date of other plan date.
   * @memberof AddPlanComponent
   */
  changeDate(isNextDay: boolean) {

    if (isNextDay) {  // If the isNextDay value is true, add a day to the otherPlanDate's date
      this.otherPlanDate.setDate(this.otherPlanDate.getDate() + 1);
    }
    else {            // Otherwise, subtract a day from it
      this.otherPlanDate.setDate(this.otherPlanDate.getDate() - 1);
    }

    this.ngOnInit();
  }

  /**
   * Insert the Add Plan form value into the database.
   *
   * @param {FormGroup} form Form value to insert.
   * @memberof AddPlanComponent
   */
  submitAddPlan(form: FormGroup) {
    // Get the data and set the value
    let data = form.value;

    // Validate inputs and return if any data is invalid
    if (!this.validateInputs(data))
      return;

    this.selectedPlan.title = data.title;
    this.selectedPlan.description = data.description;
    this.selectedPlan.dueDate = data.dueDate;
    this.selectedPlan.priority = data.priority;

    console.log('selectedPlan: ' + this.selectedPlan);
    // Create a Plan object using JSON
    let newPlan = JSON.parse(JSON.stringify(this.selectedPlan));

    // Add the plan using the Plan service
    this.planService.addPlan(newPlan).subscribe(data => {
      this.ngOnInit();

      // Reset the subplan list after inserting data
      this.selectedPlan.subPlans = [];

      // Reset the form
      form.reset();
    });
  }

  /**
   * Open the add subplan modal and subscribe the Observable to get the data
   * after the Add Subplan form is submitted or the modal is closed.
   *
   * @memberof AddPlanComponent
   */
  openModal() {
    // Open the Add subplan modal
    this.addModalRef = this.modalService.open(AddSubPlanModalComponent, {
      modalClass: 'modal-dialog-centered'
    });

    // When the modal is closed, subscribe to the Observable
    this.addModalRef.onClose.subscribe((data: any) => {
      if (data) {   // If the data exists
        let subPlanFromJson = JSON.parse(JSON.stringify(data));

        subPlanFromJson.modalIsDone = subPlanFromJson.modalIsDone === null ? false: subPlanFromJson.modalIsDone
        // Create a SubPlan object using the JSON
        let subplan = new SubPlan(subPlanFromJson.modalTitle, subPlanFromJson.modalDescription, subPlanFromJson.modalPriority, subPlanFromJson.modalIsDone);

        // Add the subplan to the array
        this.selectedPlan.subPlans.push(subplan);
      }
    });
  }

  /**
   * Open the edit subplan modal and subscribe the Observable to get the data
   * after the Edit Subplan form is submitted or the modal is closed.
   *
   * @param {*} index Index of the subplan to edit
   * @memberof AddPlanComponent
   */
  openEditModal(index) {
    // Get the subplan by the index
    let subPlan = this.selectedPlan.subPlans[index];

    // Set the subplan using the Utils static method
    Utils.setSubPlan(subPlan);

    // Open the modal
    this.editModalRef = this.modalService.open(EditSubPlanModalComponent, {
      modalClass: 'modal-dialog-centered'
    });

    // When close the modal, get the data on the modal
    this.editModalRef.onClose.subscribe((data: any) => {
      if (data == 0) {  // If the data is 0 (Meaning that the subplan needs to be deleted)
        // Remove the subplan fromt the array
        this.deleteSubPlan(index);
      }
      else if (data) {  // If the data exists
        let subPlanFromJson = JSON.parse(JSON.stringify(data));

        // Create a SubPlan object using the JSON
        let subplan = new SubPlan(subPlanFromJson.title, subPlanFromJson.description, subPlanFromJson.priority, subPlanFromJson.isDone);

        // push the subplan to the subplan array
        this.selectedPlan.subPlans[index] = subplan;
      }
    });
  }

  /**
   * Remove the subplan from the array of subplan by its index.
   *
   * @param {number} spIndex Index of the subplan which needs to be removed.
   * @memberof AddPlanComponent
   */
  deleteSubPlan(spIndex: number) {
    this.selectedPlan.subPlans.splice(spIndex, 1);
  }

  /**
   * Navigate to the selected other date's add plan page when the text is clicked.
   *
   * @memberof AddPlanComponent
   */
  navigateToOtherDate() {
    // Navigate only when currently selected date and other plan date are different
    if (this.selectedDate != this.otherPlanDate)
      window.location.href = `calendar/addPlan/${this.otherPlanDate.getFullYear()}/${this.otherPlanDate.getMonth() + 1}/${this.otherPlanDate.getDate()}`;
  }

  /**
   * Navigate to the selected other date's edit plan page when the text is clicked.
   *
   * @param {number} index Index of the plan to edit.
   *
   * @memberof AddPlanComponent
   */
   navigateToOtherPlan(index: number) {
    let otherPlanToEdit = this.otherPlan.plans[index];

    // If the IDs of the plans to edit are different, navigate to the chosen plan's edit page
    if (otherPlanToEdit._id !== this.selectedPlan._id) {
      window.location.href = `calendar/editPlan/${otherPlanToEdit._id}`;
    }
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
    let titleInput = <HTMLInputElement>document.querySelector('#inputTitle');
    let dueDateInput = <HTMLInputElement>document.querySelector('#dueDate');

    // Get error message elements
    let titleError = <HTMLElement>document.querySelector('.title.error-msg');
    let dueDateError = <HTMLElement>document.querySelector('.dueDate.error-msg');
    let priorityError = <HTMLElement>document.querySelector('.priority.error-msg');

    // If data's property is null or empty, store false
    let isTitleValid = formData.title != null && formData.title !== '';
    let isDueDateValid = formData.dueDate != null && formData.dueDate !== '';
    let isPriorityValid = formData.priority != null && formData.priority !== '';

    // Check whether the input is valid and add or remove the class 'invalid'
    this.utils.changeInputStatus(titleInput, titleError, isTitleValid);
    this.utils.changeInputStatus(dueDateInput, dueDateError, isDueDateValid);
    this.utils.changeInputStatus(null, priorityError, isPriorityValid);

    // If any of input is invalid, return false
    if (!isTitleValid || !isDueDateValid || !isPriorityValid)
      return false;
    // Otherwise, return true
    return true;
  }

}
