import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, tap} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private authservice:AuthService,
    private router:Router){}
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authservice.verificaAutenticacion()
    // IMPORTANTE!!! no es necesario seguir las indicaciones del video
    // ya que simplemente haciendo la redireccion en el propio servicio
    // nos ahorramos tener que manipular el observable y volver a comprobar su estado
    // ademas no incumplimos el principio de Don't Repeat Yourself

    // .pipe(
    //   tap( estado => {
    //     if(!estado){
    //       this.router.navigate(['./auth/login'])
    //     }
    //     })
    // )
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
    return this.authservice.verificaAutenticacion()
    // IMPORTANTE!!! no es necesario seguir las indicaciones del video
    // ya que simplemente haciendo la redireccion en el propio servicio
    // nos ahorramos tener que manipular el observable y volver a comprobar su estado
    // ademas no incumplimos el principio de Don't Repeat Yourself

    // .pipe(
    //   tap( estado => {
    //     if(!estado){
    //       this.router.navigate(['./auth/login'])
    //     }
    //     })
    // )
  }
}
