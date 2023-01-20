import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeereceiptComponent } from './seereceipt.component';

describe('SeereceiptComponent', () => {
  let component: SeereceiptComponent;
  let fixture: ComponentFixture<SeereceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeereceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeereceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
