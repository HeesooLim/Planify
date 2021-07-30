import { SubPlan } from './../../models/plan.model';
import { PlanDate } from 'src/app/models/plan-date.model';
import { PlanService } from './../../services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/services/Utils';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';
import { AddSubPlanModalComponent } from '../add-sub-plan-modal/add-sub-plan-modal.component';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Plan } from 'src/app/models/plan.model';
import { EditSubPlanModalComponent } from '../edit-sub-plan-modal/edit-sub-plan-modal.component';

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
  selectedPlan = new Plan(null, '60904c59720b3a6b29c3d932', null, null, null, 0, 0);

  // Date for the plans on another day (the section on the right side)
  otherPlanDate: Date;
  otherDateString: string;
  otherPlan: PlanDate;

  constructor(private route: ActivatedRoute, private planService: PlanService, private utils: Utils, private modalService: MdbModalService) { }

  ngOnInit(): void {
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
    const dateString = routeParams.get('date');

    // Split the date by '-' and create a new Date with it
    let dates = dateString.split('-');
    this.selectedDate = new Date(Number(dates[0]), Number(dates[1]), Number(dates[2]));

    // Set the selected date string
    this.selectedDateString = this.utils.getDateString(this.selectedDate, false);

    // If there is no chosend date for another day, assign the selected date initially
    if (this.otherPlanDate == null) {
      this.otherPlanDate = this.selectedDate;
    }

    // Create the PlanDate object using the variable otherPlanDate value
    this.otherPlan = new PlanDate(this.otherPlanDate.getFullYear(), this.otherPlanDate.getMonth(), this.otherPlanDate.getDate());

    // Get the plan on the day using the value of the otherPlanDate
    this.planService.getDataByDate(this.otherPlanDate).subscribe(data => {
      this.otherPlan = this.utils.getPlanDate(data, this.otherPlanDate);
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
   * @param {*} form Form value to insert.
   * @memberof AddPlanComponent
   */
  submitAddPlan(form) {
    // Validate the form
    this.validationForm.markAllAsTouched();

    // Get the data and set the value
    let data = form.value;
    this.selectedPlan.title = data.title;
    this.selectedPlan.description = data.description;
    this.selectedPlan.dueDate = data.dueDate;
    this.selectedPlan.priority = data.priority;

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

        // Create a SubPlan object using the JSON
        let subplan = new SubPlan(subPlanFromJson.title, subPlanFromJson.description, subPlanFromJson.priority, subPlanFromJson.isDone);

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
      window.location.href = `calendar/addPlan/${this.otherPlanDate.getFullYear()}-${this.otherPlanDate.getMonth()}-${this.otherPlanDate.getDate()}`;
  }

}
