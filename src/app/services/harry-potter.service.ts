import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private http = inject(HttpClient);
  private baseUrl = 'https://potterapi-fedeperin.vercel.app/en';

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`);
  }

  getHouses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/houses`);
  }

  getSpells(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/spells`);
  }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/books`);
  }
}
