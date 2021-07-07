import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPlanComponent } from './build-plan.component';

describe('BuildPlanComponent', () => {
  let component: BuildPlanComponent;
  let fixture: ComponentFixture<BuildPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
