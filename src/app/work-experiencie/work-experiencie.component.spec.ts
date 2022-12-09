import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiencieComponent } from './WorkExperiencieComponent';

describe('WorkExperiencieComponent', () => {
  let component: WorkExperiencieComponent;
  let fixture: ComponentFixture<WorkExperiencieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperiencieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperiencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});