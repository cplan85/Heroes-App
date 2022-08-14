import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
   return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroe(id:string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
   }

  getSuggestions(term: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${term}&limit=6`)
  }

  addHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe)
  }

  editHeroe(heroe: Heroe, id: string): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${id}`, heroe)
  }

  deleteHeroe(id:string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }
}
