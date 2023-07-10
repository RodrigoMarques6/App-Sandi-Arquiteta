import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plano-antecipado',
  templateUrl: './plano-antecipado.component.html',
  styleUrls: ['./plano-antecipado.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule, MatButtonModule, RouterModule]
})
export class PlanoAntecipadoComponent {
  description2: string = 'Plano Antecipado';
  alert2: string = 'Nesse plano, você recebe no dia seguinte.';
  command2: string = 'Quanto custa o projeto?';
  valueClient2: string = 'Valor para o cliente:'
}
