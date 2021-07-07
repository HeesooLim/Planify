import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubPlanModalComponent } from './add-sub-plan-modal.component';

describe('AddSubPlanModalComponent', () => {
  let component: AddSubPlanModalComponent;
  let fixture: ComponentFixture<AddSubPlanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubPlanModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubPlanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
