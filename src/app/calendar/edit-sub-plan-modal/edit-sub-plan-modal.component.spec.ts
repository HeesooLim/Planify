import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubPlanModalComponent } from './edit-sub-plan-modal.component';

describe('EditSubPlanModalComponent', () => {
  let component: EditSubPlanModalComponent;
  let fixture: ComponentFixture<EditSubPlanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubPlanModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubPlanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
