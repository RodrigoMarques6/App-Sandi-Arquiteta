import { Component } from '@angular/core';
import { PlanoEconomicoComponent } from './plano-economico/plano-economico.component';
import { PlanoAntecipadoComponent } from './plano-antecipado/plano-antecipado.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [PlanoEconomicoComponent, PlanoAntecipadoComponent]
})
export class HomeComponent {
  
}
