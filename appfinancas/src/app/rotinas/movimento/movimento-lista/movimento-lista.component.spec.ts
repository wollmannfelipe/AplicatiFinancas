import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoListaComponent } from './movimento-lista.component';

describe('movimentoListaComponent', () => {
  let component: MovimentoListaComponent;
  let fixture: ComponentFixture<MovimentoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
