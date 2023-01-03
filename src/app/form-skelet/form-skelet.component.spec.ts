import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkeletComponent } from './form-skelet.component';

describe('FormSkeletComponent', () => {
  let component: FormSkeletComponent;
  let fixture: ComponentFixture<FormSkeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSkeletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSkeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
