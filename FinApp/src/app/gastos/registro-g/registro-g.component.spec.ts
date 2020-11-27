import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGComponent } from './registro-g.component';

describe('RegistroGComponent', () => {
  let component: RegistroGComponent;
  let fixture: ComponentFixture<RegistroGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
