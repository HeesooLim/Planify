import { PlanService } from './../../services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddSubPlanModalComponent } from '../add-sub-plan-modal/add-sub-plan-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';
import { Plan, SubPlan } from 'src/app/models/plan.model';
import { PlanDate } from 'src/app/models/plan-date.model';
import { Utils } from 'src/app/services/Utils';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditSubPlanModalComponent } from '../edit-sub-plan-modal/edit-sub-plan-modal.component';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['../add-plan/add-plan.component.css']
})
export class EditPlanComponent implements OnInit {
  // Using a modal to add and edit subplans
  addModalRef: MdbModalRef<AddSubPlanModalComponent>;
  editModalRef: MdbModalRef<EditSubPlanModalComponent>;

  // Formgroup object to validate the input
  validationForm: FormGroup;

  // Currently selected date in string
  selectedDateString: string;

  // Current plan object that the user is looking at
  selectedPlan = new Plan(null, null, null, null, null, null, null);

  // Entered date input string
  dateInputString = "";

  // Selected date and its string chosen at the right side
  otherPlanDate: Date;
  otherDateString: string;

  // The plan on the selected date
  otherPlan = new PlanDate(null, null, null);

  constructor(private route: ActivatedRoute, private planService: PlanService, private utils: Utils, private modalService: MdbModalService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;   // Get params
    const planId = routeParams.get('planId');           // Plan ID to get the chosen plan data

    // Get the plan using the plan ID
    this.planService.getDataById(planId).subscribe(data => {
      // Get the first plan found
      let planData = data[0];

      // Get the dueDate as the Date object
      let dueDate = new Date(planData.dueDate);

      // Add a day to the dueDate since the date starts from 0
      dueDate.setDate(dueDate.getDate());

      // Create a plan object using the data
      this.selectedPlan = new Plan(planData._id, planData.userId, planData.title, planData.description, dueDate, planData.progress, planData.priority);

      // Add subplans to the plan
      for (let index = 0; index < data[0].subPlans.length; index++) {
        this.selectedPlan.addSubplan(new SubPlan(data[0].subPlans[index].title, data[0].subPlans[index].description, data[0].subPlans[index].priority, data[0].subPlans[index].isDone))
      }

      // Get the original date string
      this.dateInputString = this.selectedPlan.dueDate.toISOString().slice(0, 16);

      // Date string to display
      this.selectedDateString = this.utils.getDateString(this.selectedPlan.dueDate, false);

      // If there is no other selected date to display, set it same as currently selected date
      if (this.otherPlanDate == null) {
        this.otherPlanDate = dueDate;
      }

      // Get the plan on the selected other date
      this.planService.getDataByDate(this.otherPlanDate).subscribe(data => {
        this.otherPlan = this.utils.getPlanDate(data, this.otherPlanDate);
      });

      // Get the date string to display
      this.otherDateString = this.utils.getDateString(this.otherPlanDate, false);

      // Create a FormGroup object passing the initial values
      this.validationForm = new FormGroup({
        dueDate: new FormControl(this.dateInputString, { validators: Validators.required, updateOn: 'blur' }),
        priority: new FormControl(this.selectedPlan.priority.toString(), { validators: Validators.required, updateOn: 'blur' }),
        title: new FormControl(this.selectedPlan.title, { validators: Validators.required, updateOn: 'blur' }),
        description: new FormControl(this.selectedPlan.description, { updateOn: 'blur' })
      });
    });
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
   * Change the date as the user clicks the arrow.
   *
   * @param {boolean} isNextDay If true, set the date to the next day.
   * @memberof EditPlanComponent
   */
  changeDate(isNextDay: boolean) {
    if (isNextDay) {
      // Add 1 day to the selected other date
      this.otherPlanDate.setDate(this.otherPlanDate.getDate() + 1);
    }
    else {
      // Subtract 1 day from the selected other date
      this.otherPlanDate.setDate(this.otherPlanDate.getDate() - 1);
    }
    // Refresh the view
    this.ngOnInit();
  }

  /**
   * Get the data from the form and update the plan.
   *
   * @param {*} form Edit plan form data to submit.
   * @memberof EditPlanComponent
   */
  submitEditPlan(form) {
    let data = form.value;
    this.selectedPlan.title = data.title;
    this.selectedPlan.description = data.description;
    this.selectedPlan.dueDate = data.dueDate;
    this.selectedPlan.priority = data.priority;
    this.selectedPlan.progress = 0;

    this.selectedPlan.progress = this.utils.calculateProgress(this.selectedPlan);

    // Update the plan using the plan service
    this.planService.updatePlan(this.selectedPlan).subscribe(data => {
      // Refresh the view
      this.ngOnInit();

      // Go back to the calendar page
      window.location.href = 'calendar';
    });
  }

  /**
   * Open the Add subplan modal.
   *
   * @memberof EditPlanComponent
   */
  openAddModal() {
    // Open the modal
    this.addModalRef = this.modalService.open(AddSubPlanModalComponent, {
      modalClass: 'modal-dialog-centered'
    });

    // When close the modal, get the data on the modal
    this.addModalRef.onClose.subscribe((data: any) => {
      if (data) {
        let subPlanFromJson = JSON.parse(JSON.stringify(data));

        // Using the data, create a new subplan
        let subplan = new SubPlan(subPlanFromJson.title, subPlanFromJson.description, subPlanFromJson.priority, subPlanFromJson.isDone);

        // Push the subplan to the list
        this.selectedPlan.subPlans.push(subplan);
      }
    });
  }

  /**
   * Open the Edit Subplan modal.
   *
   * @param {*} index Index of the subplan to edit.
   * @memberof EditPlanComponent
   */
  openEditModal(index) {
    // Get the subplan by index
    let subPlan = this.selectedPlan.subPlans[index];

    // Set the subplan using the static method (data will be used in the modal)
    Utils.setSubPlan(subPlan);

    // Open the modal
    this.editModalRef = this.modalService.open(EditSubPlanModalComponent, {
      modalClass: 'modal-dialog-centered'
    });

    // When close the modal, get the data on the modal
    this.editModalRef.onClose.subscribe((data: any) => {
      if (data == 0) {
        this.selectedPlan.subPlans.splice(index, 1);
      }
      else if (data) {
        let subPlanFromJson = JSON.parse(JSON.stringify(data));

        // Create a subplan object using the json data
        let subplan = new SubPlan(subPlanFromJson.title, subPlanFromJson.description, subPlanFromJson.priority, subPlanFromJson.isDone);

        // Push the subplan to the list
        this.selectedPlan.subPlans[index] = subplan;
      }
    });
  }

  /**
   * Delete a SubPlan by index from the array of the subplan.
   *
   * @param {number} spIndex Index of the subplan to delete.
   * @memberof EditPlanComponent
   */
  deleteSubPlan(spIndex: number) {
    // Remove the subplan item from the array using the index
    this.selectedPlan.subPlans.splice(spIndex, 1);

    // Update the plan
    this.planService.updatePlan(this.selectedPlan).subscribe(data => {
    });
  }

  /**
   * Navigate to the selected other date's edit plan page when the text is clicked.
   *
   * @param {number} index Index of the plan to edit.
   *
   * @memberof AddPlanComponent
   */
  navigateToOtherDate(index: number) {
    let otherPlanToEdit = this.otherPlan.plans[index];

    // If the IDs of the plans to edit are different, navigate to the chosen plan's edit page
    if (otherPlanToEdit._id !== this.selectedPlan._id) {
      window.location.href = `calendar/editPlan/${otherPlanToEdit._id}`;
    }
  }
}
