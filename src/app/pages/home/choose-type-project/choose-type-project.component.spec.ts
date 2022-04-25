import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTypeProjectComponent } from './choose-type-project.component';

describe('ChooseTypeProjectComponent', () => {
  let component: ChooseTypeProjectComponent;
  let fixture: ComponentFixture<ChooseTypeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTypeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTypeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
