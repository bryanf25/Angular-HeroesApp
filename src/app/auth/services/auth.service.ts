import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth() {
    return { ...this._auth }
  }

  constructor(private http: HttpClient,
    private router: Router) { }

  verificaAutenticacion(): Observable<boolean> {

    if (!localStorage.getItem('token')) {
      this.router.navigate(['./auth/login'])
      return of(false);
    }

    return this.http.get<Auth>(`${this.url}/usuarios/1`)
      .pipe(
        map(responseauth => {
          // ayuda a mantener la sesion viva ya que al saber que siempre que 
          // el guard se activa para cargar la pagina, este utiliza este metodo para verificar
          // si aun se tiene token pero cuando ya este ya esta cargado en local storage
          //  al no poder guardar el usuario en el local requiero volver hacer la consulta
          // para guardar el usuario de nuevo en memoria de la aplicación y asi mantenerlo vigente

          this._auth = responseauth
          return true;
        })
      );
  }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.url}/usuarios/1`)
      .pipe(
        // sirve para depurar la info, es decir pasara primero por el tap hara lo que se le pida
        //  y luego lo enviara al servicio que lo este necesitando 
        tap(responseAuth => {
          this._auth = responseAuth
          localStorage.setItem('token', responseAuth.id.toString())
        })
      );
  }
}
