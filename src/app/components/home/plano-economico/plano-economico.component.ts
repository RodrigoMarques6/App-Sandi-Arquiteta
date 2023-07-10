import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plano-economico',
  templateUrl: './plano-economico.component.html',
  styleUrls: ['./plano-economico.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule, MatButtonModule, RouterModule]
})
export class PlanoEconomicoComponent {
  description1: string = 'Plano Econômico';
  alert1: string = 'Nesse plano, você recebe mensalmente.';
  command1: string = 'Quanto custa o projeto?';
  valueClient1: string = 'Valor para o cliente:'

  clicou () {
    console.log('Opa')
  }
}
