import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from "../../components/confirmar/confirmar.component";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 50%;
        margin-left: 25%;
        border-radius: 10px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  publishers: string[] = [];
  heroeName!: string;
  heroe: Heroe = {
    superhero: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    alt_img: '',
  };

  constructor(
    private heroeService: HeroesService,
    private activadeRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog:MatDialog
  ) {
    this.publishers = Object.values(Publisher);
  }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.activadeRoute.params
        .pipe(switchMap(({ id }) => this.heroeService.getHeroeDetails(id)))
        .subscribe((heroe) => {
          this.heroe = heroe;
          this.heroeName = this.heroe.superhero;
        });
    }
  }

  guardar() {
    if (this.validarEdicion()) {
      // Editar
      this.heroeService.actualizarHeroe(this.heroe).subscribe((response) => {
        this.mostrarSnackbar(`se acaba de editar el heroe '${response.superhero}'`);
      });
    } else {
      // Crear
      if (this.heroe.superhero.trim().length > 0) {
        this.heroeService.postHeroe(this.heroe).subscribe((heroe) => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackbar(`se creo el heroe '${this.heroe.superhero}'`);
        });
      }
    }
  }

  validarEdicion(): boolean {
    if (this.heroe.id) {
      return true;
    } else return false;
  }

  EliminarHeroe() {

    const dialog = this.dialog.open(ConfirmarComponent,{
      width: '40%',
      data: this.heroe
    })
    dialog.afterClosed().subscribe(
      result =>{
        if(result){
          this.heroeService.borrarHeroe(this.heroe.id!).subscribe((response) => {
            this.router.navigate(['/heroes']);
            this.mostrarSnackbar(`se ha eliminado el heroe '${this.heroe.superhero}'`);
          });
        }
      }
    )
  }

  mostrarSnackbar(mensaje: string){
    this.snackBar.open(mensaje, 'Cerrar',{duration: 3000})
  }
}
