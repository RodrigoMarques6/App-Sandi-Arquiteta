import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  number!: number;

  constructor() { }

  setNumber(params: number): void {
    this.number = params;
  }

  getNumber(): number {
    return this.number;
  }

}
