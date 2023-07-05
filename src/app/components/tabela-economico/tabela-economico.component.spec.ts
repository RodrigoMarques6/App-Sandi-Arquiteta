import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEconomicoComponent } from './tabela-economico.component';

describe('TabelaEconomicoComponent', () => {
  let component: TabelaEconomicoComponent;
  let fixture: ComponentFixture<TabelaEconomicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaEconomicoComponent]
    });
    fixture = TestBed.createComponent(TabelaEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
