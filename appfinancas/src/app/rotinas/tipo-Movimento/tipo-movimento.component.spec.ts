import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMovimentoComponent } from './tipo-Movimento.component';

describe('tipoMovimentoComponent', () => {
  let component: TipoMovimentoComponent;
  let fixture: ComponentFixture<TipoMovimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMovimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
