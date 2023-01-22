import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildScannerComponent } from './child-scanner.component';

describe('ChildScannerComponent', () => {
  let component: ChildScannerComponent;
  let fixture: ComponentFixture<ChildScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildScannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
