import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { movimentoDetalheComponent } from './movimento-detalhe.component';

describe('movimentoDetalheComponent', () => {
  let component: movimentoDetalheComponent;
  let fixture: ComponentFixture<movimentoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ movimentoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movimentoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
