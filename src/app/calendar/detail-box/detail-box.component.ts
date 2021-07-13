import { PlanService } from './../../services/plan/plan.service';
import { PlanDate } from './../../models/plan-date.model';
import { Component, Input, OnInit } from '@angular/core';
import { Plan, SubPlan } from 'src/app/models/plan.model';
import { Utils } from 'src/app/services/Utils';
import { AddSubPlanModalComponent } from '../add-sub-plan-modal/add-sub-plan-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})

export class DetailBoxComponent implements OnInit {
  modalRef: MdbModalRef<AddSubPlanModalComponent>;
  constructor(private planService: PlanService, private utils: Utils, private modalService: MdbModalService) { }

  @Input('planDateFromCal') planDate: PlanDate;
  @Input('dateStringFromCal') dateString: PlanDate;

  selectedBtnIndex: number;

  ngOnInit(): void {
    let menuList = <HTMLElement>document.querySelector('#menu-list');
    let menuItems = menuList.querySelectorAll('li');

    // Add event listener for each item in the menu list
    menuItems[0].addEventListener('click', () => {
      // call the method to add a new subplan
      this.menuItemAction(0);
    });
    menuItems[1].addEventListener('click', () => {
      // call the method to edit the plan
      this.menuItemAction(1);
    });
    menuItems[2].addEventListener('click', () => {
      // call the method to delete the plan
      this.menuItemAction(2);
    });
  }

  /**
   * Executed when the arrow besides the plan is clicked to expand the
   * list of subplans which belong to the plan.
   *
   * @param {string} index Index of the clicked arrow's plan.
   * @memberof DetailBoxComponent
   */
  expandPlan(index: string) {
    // Get the selected ul and arrow object
    let targetUl = document.getElementById('plan-' + index);
    let targetArrow = document.getElementById('arrow-' + index);

    // Toggle the arrow class
    targetArrow.classList.toggle('fa-chevron-left');
    targetArrow.classList.toggle('fa-chevron-down');

    // Open the subplans list
    targetUl.classList.toggle('opened');
  }

  /**
   * Update the whole plan when the plan is marked as done.
   *
   * @param {*} event Object containing information about the action that just happened.
   * @param {string} planIndex Index of the plan which needs to be updated.
   * @memberof DetailBoxComponent
   */
  updateMainPlan(event, planIndex: string) {
    let checkBox = event.target;  // Checkbox which is just clicked

    let plan = <Plan>this.planDate.plans[planIndex];  // Get the plan object using the given index
    let subPlans = plan.subPlans;

    // Update subPlan's isDone value as well as plan's progress value
    if (checkBox.checked) {
      // If the main plan's progress is 100, every subplan is marked as done
      plan.progress = 100;
      subPlans.forEach(element => {
        element.isDone = true;
      });
    }
    else {
      // If the main plan's progress is 0, every subplan is marked as undone
      plan.progress = 0;
      subPlans.forEach(element => {
        element.isDone = false;
      });
    }

    this.updatePlan(plan);  // Call the updatePlan function
    this.filterPlans();     // Filter the plan after the update
  }

  /**
   * Update the subplan when the it is marked as done.
   *
   * @param {*} event Object containing information about the action that just happened.
   * @param {string} planIndex Index of the plan which contains the subplan.
   * @param {string} subPlanIndex Index of the subplan which needs to be updated.
   * @memberof DetailBoxComponent
   */
  updateSubPlan(event, planIndex: string, subPlanIndex: string) {
    let checkBox = event.target;  // clicked checkbox
    let plan = <Plan>this.planDate.plans[planIndex];  // Get the plan using the index

    // As the checkbox is checked or unchecked, update its value of isDone
    if (checkBox.checked)
      plan.subPlans[subPlanIndex].isDone = true;
    else
      plan.subPlans[subPlanIndex].isDone = false;

    this.updatePlan(plan);  // Call the updatePlan function
    this.filterPlans();     // Filter plans after the update
  }

  /**
   * Filter the plans depending on their isDone values.
   * TODO: if plan's progress is changed, it should be filtered immediately
   *
   * @memberof DetailBoxComponent
   */
  filterPlans() {
    let selectValue = (<any>document.getElementById('plan-category')).value;

    // Get all plan items
    let listItems = <any>document.querySelectorAll('li.plans-container-items');

    // If the category all is selected, display every plan
    if (selectValue == 'all') {
      listItems.forEach(li => {
        li.style.display = "block";
      });
    }
    else {
      listItems.forEach(li => {
        // Depending on the selected category, change the display value of the item
        if (!li.classList.contains(selectValue)) {
          li.style.display = "none";
        }
        else {
          li.style.display = "block";
        }
      });
    }
  }

  /**
   * Open the menu for each plan.
   *
   * @param {number} btnIndex Index of the clicked menu button.
   * @memberof DetailBoxComponent
   */
  toggleMenu(btnIndex: number) {
    this.selectedBtnIndex = btnIndex;

    // Change the visibility of the overlay and menu list
    this.toggleOverlay();

    // Menu button to open the menu
    let menuButton = document.querySelector(`#btn-menu-${btnIndex} i`);

    // Menu list element and items in it
    let menuList = <HTMLElement>document.querySelector('#menu-list');
    let clientRect = menuButton.getBoundingClientRect();

    // Set the position of the menu list relative to the window
    menuList.style.left = `${clientRect.left + 15}px`;
    menuList.style.top = `${clientRect.top - 5}px`;
  }

  /**
   * Depending on the index of the selected plan menu and the index of the menu,
   * add subplan, edit or delete the plan.
   * (This function is called in the EventListener)
   *
   * @param {number} menuIndex Index of the selected menu.
   * @memberof DetailBoxComponent
   */
  menuItemAction(menuIndex: number) {
    // Selected index of the menu button
    let btnIndex = this.selectedBtnIndex;

    // Get the selected plan's id to edit or delete the plan
    let planId = (<PlanDate>this.planDate).plans[btnIndex]._id;

    switch (menuIndex) {
      case 0:
        // To open the add subplan modal, pass the selected button's index
        this.openModal(btnIndex);
        // Change the visibility of the menu list and overlay
        this.toggleOverlay();
        break;
      case 1:
        // Go to the selected plan's editPlan page
        window.location.href = `calendar/editPlan/${planId}`;
        // Change the visibility of the menu list and overlay
        this.toggleOverlay();
        break;
      case 2:
        // To delete the selected plan, pass the selected button's index
        this.deletePlan(planId);
        // Change the visibility of the menu list and overlay
        this.toggleOverlay();
        break;

      default:
        break;
    }
  }

  /**
   * Toggle the classes for opening or closing the menu list.
   * - Change the visibility of the menu overlay element
   * - Disable or enable the scroll (scroll disabled when menu opened)
   *
   * @memberof DetailBoxComponent
   */
  toggleOverlay() {
    // Get the menu overlay element and body to toggle the class
    let menuOverlay = document.getElementById('menu-overlay');
    let body = document.querySelector('body');

    // Toggle the class to change its visibility and disable or enable the scroll
    // (When the menu is opened, scroll is disabled)
    menuOverlay.classList.toggle('d-none');
    body.classList.toggle('scroll-disabled');
  }

  /**
   * Delete a plan by its ID and refresh the list.
   *
   * @param {string} id ID of the plan to delete.
   * @memberof DetailBoxComponent
   */
  deletePlan(id: string) {
    this.planService.deletePlan(id).subscribe(data => {
      this.refreshPlanDate();
    });
  }

  /**
   * Remove a subplan from the array and update the plan.
   *
   * @param {Plan} plan Plan that needs to be updated when deleting the subplan.
   * @param {number} spIndex Index of the subplan in the plan.
   * @memberof DetailBoxComponent
   */
  deleteSubPlan(plan: Plan, spIndex: number) {
    // Remove the plan from the subplan list
    plan.subPlans.splice(spIndex, 1);

    // Update the plan
    this.updatePlan(plan);
  }

  /**
   * Update the plan using the plan service.
   *
   * @param {Plan} plan Plan to update.
   * @memberof DetailBoxComponent
   */
  updatePlan(plan: Plan) {
    plan.progress = this.utils.calculateProgress(plan);
    this.planService.updatePlan(plan).subscribe(data => { });
  }

  /**
   * Refresh the plans in current date.
   *
   * @memberof DetailBoxComponent
   */
  refreshPlanDate() {
    // Create a Date object using the current date value
    let date = new Date(this.planDate.year, this.planDate.month, this.planDate.date);
    // Get a PlanDate and make the value of planDate variable up to date
    this.planService.getDataByDate(date).subscribe(data => {
      this.planDate = this.utils.getPlanDate(data, date);
    });
  }

  /**
   * Open the modal to add a new subplan.
   *
   * @param {number} planIndex Index of the plan which the subplan will be inserted.
   * @memberof DetailBoxComponent
   */
  openModal(planIndex: number) {
    // Open the Add Subplan modal
    this.modalRef = this.modalService.open(AddSubPlanModalComponent, {
      modalClass: 'modal-dialog-centered'
    });

    // Get the plan by index
    let plan = <Plan>this.planDate.plans[planIndex];

    this.modalRef.onClose.subscribe((data: any) => {
      if (data) {   // if the data exists
        let subPlanFromJson = JSON.parse(JSON.stringify(data));

        // Create a new subplan object using the json data string
        let subplan = new SubPlan(subPlanFromJson.title, subPlanFromJson.description, subPlanFromJson.priorityRadio, subPlanFromJson.isDone);

        // Add the new subplan item to the list
        plan.subPlans.push(subplan);
      }
      // Update the plan
      this.updatePlan(plan);
    });
  }
}
