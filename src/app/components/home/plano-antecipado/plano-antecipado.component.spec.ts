import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoAntecipadoComponent } from './plano-antecipado.component';

describe('PlanoAntecipadoComponent', () => {
  let component: PlanoAntecipadoComponent;
  let fixture: ComponentFixture<PlanoAntecipadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoAntecipadoComponent]
    });
    fixture = TestBed.createComponent(PlanoAntecipadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
