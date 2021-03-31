import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidServicesComponent } from './covid-services.component';

describe('CovidServicesComponent', () => {
  let component: CovidServicesComponent;
  let fixture: ComponentFixture<CovidServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
