import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tipoMovimentoDetalheComponent } from './tipoMovimento-detalhe.component';

describe('tipoMovimentoDetalheComponent', () => {
  let component: tipoMovimentoDetalheComponent;
  let fixture: ComponentFixture<tipoMovimentoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tipoMovimentoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tipoMovimentoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
