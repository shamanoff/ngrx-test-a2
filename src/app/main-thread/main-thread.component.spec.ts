import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThreadComponent } from './main-thread.component';

describe('MainThreadComponent', () => {
  let component: MainThreadComponent;
  let fixture: ComponentFixture<MainThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
