import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocardsComponent } from './nocards.component';

describe('NocardsComponent', () => {
  let component: NocardsComponent;
  let fixture: ComponentFixture<NocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
