import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecialsComponent } from './our-specials.component';

describe('OurSpecialsComponent', () => {
  let component: OurSpecialsComponent;
  let fixture: ComponentFixture<OurSpecialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSpecialsComponent]
    });
    fixture = TestBed.createComponent(OurSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
