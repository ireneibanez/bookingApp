import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSelectionDetailComponent } from './event-selection-detail.component';

describe('EventSelectionDetailComponent', () => {
  let component: EventSelectionDetailComponent;
  let fixture: ComponentFixture<EventSelectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSelectionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventSelectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
