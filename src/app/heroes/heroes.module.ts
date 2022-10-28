import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { MaterialModule } from '../material/material.module';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenHeroePipe } from './pipes/imagen-heroe.pipe';
import { HeroeDescripcionTarjetaComponent } from './components/heroe-descripcion-tarjeta/heroe-descripcion-tarjeta.component';



@NgModule({
  declarations: [
    AgregarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    BuscarComponent,
    HeroeTarjetaComponent,
    ImagenHeroePipe,
    HeroeDescripcionTarjetaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
