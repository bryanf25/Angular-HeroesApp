import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  public heroes : Heroe[] = [];

  constructor( private heroesService : HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe( response => this.heroes = response )
  }



}
