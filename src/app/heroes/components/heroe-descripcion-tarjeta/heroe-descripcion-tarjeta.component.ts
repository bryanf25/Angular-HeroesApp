import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { Location } from "@angular/common";

@Component({
  selector: 'app-heroe-descripcion-tarjeta',
  templateUrl: './heroe-descripcion-tarjeta.component.html',
  styles: [
    `
      img {
        width: 100%
      }
    `,
  ],
})
export class HeroeDescripcionTarjetaComponent implements OnInit {
  @Input() heroe!: Heroe;

  constructor( private _location: Location) {}

  ngOnInit(): void {}

  irAtras(){
    this._location.back();
  }
}
