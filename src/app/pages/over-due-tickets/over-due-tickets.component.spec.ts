import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverDueTicketsComponent } from './over-due-tickets.component';

describe('OverDueTicketsComponent', () => {
  let component: OverDueTicketsComponent;
  let fixture: ComponentFixture<OverDueTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverDueTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverDueTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
