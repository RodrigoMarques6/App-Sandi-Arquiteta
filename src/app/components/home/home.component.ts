import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatInputModule, MatButtonModule, RouterModule]
})
export class HomeComponent {
  description1: string = 'Plano Econômico';
  alert1: string = 'Nesse plano, você recebe mensalmente.';
  command1: string = 'Quanto custa o projeto?';
  valueClient1: string = 'Valor para o cliente:'
}
