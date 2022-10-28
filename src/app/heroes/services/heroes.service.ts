import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.url);
  }

  getHeroeDetails(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.url}/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.url }?q=${ termino }&_limit=6`);
  }

  postHeroe(heroe : Heroe): Observable<Heroe>
  {
    return this.http.post<Heroe>(`${this.url}/`, heroe);
  }

  actualizarHeroe(heroe : Heroe): Observable<Heroe>
  {
    return this.http.put<Heroe>(`${this.url}/${heroe.id}`, heroe);
  }

  borrarHeroe(id : string): Observable<Heroe>
  {
    return this.http.delete<Heroe>(`${this.url}/${id}`);
  }


}
