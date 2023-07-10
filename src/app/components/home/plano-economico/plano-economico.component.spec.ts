import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoEconomicoComponent } from './plano-economico.component';

describe('PlanoEconomicoComponent', () => {
  let component: PlanoEconomicoComponent;
  let fixture: ComponentFixture<PlanoEconomicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoEconomicoComponent]
    });
    fixture = TestBed.createComponent(PlanoEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
