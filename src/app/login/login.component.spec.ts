import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOginComponent } from './login.component';

describe('LOginComponent', () => {
  let component: LOginComponent;
  let fixture: ComponentFixture<LOginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
