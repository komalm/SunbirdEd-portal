import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificate2DetailsComponent } from './certificate2-details.component';

describe('Certificate2DetailsComponent', () => {
  let component: Certificate2DetailsComponent;
  let fixture: ComponentFixture<Certificate2DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Certificate2DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Certificate2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
