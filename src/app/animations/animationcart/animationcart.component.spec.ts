import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationcartComponent } from './animationcart.component';

describe('AnimationcartComponent', () => {
  let component: AnimationcartComponent;
  let fixture: ComponentFixture<AnimationcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
