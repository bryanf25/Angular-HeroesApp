import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { delay, Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img
  {
    width: 50%;
    margin-left: 25%;
    border-radius: 10px;
  }
  `]
})
export class HeroeComponent implements OnInit {


  private idHeroe: any = '';
  public heroe!: Heroe;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.idHeroe = this._activateRoute.snapshot.paramMap.get('id');
    this._heroesService.getHeroeDetails(this.idHeroe)
      .pipe(delay(2000))
      .subscribe((response) => {
        this.heroe = response;
        this.heroe.superhero
        console.log(response.id);
      });
  }
}
