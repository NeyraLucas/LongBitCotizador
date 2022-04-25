import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeProyectoComponent } from './tipo-de-proyecto.component';

describe('TipoDeProyectoComponent', () => {
  let component: TipoDeProyectoComponent;
  let fixture: ComponentFixture<TipoDeProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
