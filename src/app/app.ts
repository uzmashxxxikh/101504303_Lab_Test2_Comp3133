import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { HarryPotterService } from './services/harry-potter.service';
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterSearchComponent, CharacterListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private hpService = inject(HarryPotterService);

  currentView = signal<'characters' | 'houses' | 'spells' | 'books'>('characters');
  allCharacters = signal<Character[]>([]);
  allHouses = signal<any[]>([]);
  allSpells = signal<any[]>([]);
  allBooks = signal<any[]>([]);
  searchName = signal('');
  selectedHouse = signal('');
  status = signal<'loading' | 'success' | 'empty' | 'error'>('loading');

  filteredCharacters = computed(() => {
    const characters = this.allCharacters();
    const name = this.searchName().toLowerCase();
    const house = this.selectedHouse();

    return characters.filter(character => {
      const matchesName = character.fullName?.toLowerCase().includes(name);
      const matchesHouse = house ? character.hogwartsHouse === house : true;
      return matchesName && matchesHouse;
    });
  });

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.status.set('loading');
    
    this.hpService.getCharacters().subscribe({
      next: (data) => {
        this.allCharacters.set(data);
        this.status.set(data.length ? 'success' : 'empty');
      },
      error: () => {
        this.status.set('error');
      }
    });
  }

  loadHouses(): void {
    this.status.set('loading');
    
    this.hpService.getHouses().subscribe({
      next: (data) => {
        this.allHouses.set(data);
        this.status.set(data.length ? 'success' : 'empty');
      },
      error: () => {
        this.status.set('error');
      }
    });
  }

  loadSpells(): void {
    this.status.set('loading');
    
    this.hpService.getSpells().subscribe({
      next: (data) => {
        this.allSpells.set(data);
        this.status.set(data.length ? 'success' : 'empty');
      },
      error: () => {
        this.status.set('error');
      }
    });
  }

  loadBooks(): void {
    this.status.set('loading');
    
    this.hpService.getBooks().subscribe({
      next: (data) => {
        this.allBooks.set(data);
        this.status.set(data.length ? 'success' : 'empty');
      },
      error: () => {
        this.status.set('error');
      }
    });
  }

  switchView(view: 'characters' | 'houses' | 'spells' | 'books'): void {
    this.currentView.set(view);
    this.searchName.set('');
    this.selectedHouse.set('');
    
    if (view === 'characters' && this.allCharacters().length === 0) {
      this.loadCharacters();
    } else if (view === 'houses' && this.allHouses().length === 0) {
      this.loadHouses();
    } else if (view === 'spells' && this.allSpells().length === 0) {
      this.loadSpells();
    } else if (view === 'books' && this.allBooks().length === 0) {
      this.loadBooks();
    } else {
      this.status.set('success');
    }
  }

  onSearchChanged(filters: { name: string; house: string }): void {
    this.searchName.set(filters.name);
    this.selectedHouse.set(filters.house);
    
    this.status.set(this.filteredCharacters().length ? 'success' : 'empty');
  }
}

