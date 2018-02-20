import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tipoMovimentoListaComponent } from './tipoMovimento-lista.component';

describe('tipoMovimentoListaComponent', () => {
  let component: tipoMovimentoListaComponent;
  let fixture: ComponentFixture<tipoMovimentoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tipoMovimentoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tipoMovimentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
