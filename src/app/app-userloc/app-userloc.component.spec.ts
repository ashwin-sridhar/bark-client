import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserlocComponent } from './app-userloc.component';

describe('AppUserlocComponent', () => {
  let component: AppUserlocComponent;
  let fixture: ComponentFixture<AppUserlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUserlocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
