import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { movimentoComponent } from './movimento.component';

describe('movimentoComponent', () => {
  let component: movimentoComponent;
  let fixture: ComponentFixture<movimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ movimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
