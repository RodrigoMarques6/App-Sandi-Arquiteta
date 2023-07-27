import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-plano-economico',
  templateUrl: './plano-economico.component.html',
  styleUrls: ['./plano-economico.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule, MatButtonModule, RouterModule, FormsModule]
})
export class PlanoEconomicoComponent {
  description1: string = 'Plano Econômico';
  alert1: string = 'Nesse plano, você recebe mensalmente.';
  command1: string = 'Quanto custa o projeto?';
  valueClient1: string = 'Valor para o cliente:';
  valueInput!: number;

  clickBtnCalc () {
    console.log(this.valueInput)
  };

  constructor (private router: Router, private sharedData: SharedDataService) {}
  
  goToTable() {

    this.router.navigate(['tabela'])

    this.sharedData.setNumber(200);

    }

  }
