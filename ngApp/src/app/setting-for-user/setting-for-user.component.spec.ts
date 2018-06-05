import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingForUserComponent } from './setting-for-user.component';

describe('SettingForUserComponent', () => {
  let component: SettingForUserComponent;
  let fixture: ComponentFixture<SettingForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
