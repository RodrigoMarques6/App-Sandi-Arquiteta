import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  taxa: string;
  modalidade: number;
  desconto: number;
  receba_total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {modalidade: 1, taxa: 'Hydrogen', desconto: 1.0079, receba_total: 1000},
  {modalidade: 2, taxa: 'Helium', desconto: 4.0026, receba_total: 1000},
  {modalidade: 3, taxa: 'Lithium', desconto: 6.941, receba_total: 1000},
  {modalidade: 4, taxa: 'Beryllium', desconto: 9.0122, receba_total: 1000},
  {modalidade: 5, taxa: 'Boron', desconto: 10.811, receba_total: 1000},
  {modalidade: 6, taxa: 'Carbon', desconto: 12.0107, receba_total: 1000},
  {modalidade: 7, taxa: 'Nitrogen', desconto: 14.0067, receba_total: 1000},
  {modalidade: 8, taxa: 'Oxygen', desconto: 15.9994, receba_total: 1000},
  {modalidade: 9, taxa: 'Fluorine', desconto: 18.9984, receba_total: 1000},
  {modalidade: 10, taxa: 'Neon', desconto: 20.1797, receba_total: 1000},
];

@Component({
  selector: 'app-tabela-economico',
  templateUrl: './tabela-economico.component.html',
  styleUrls: ['./tabela-economico.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class TabelaEconomicoComponent {
  displayedColumns: string[] = ['modalidade', 'taxa', 'desconto', 'receba_total'];
  dataSource = ELEMENT_DATA;
}
