import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';
import { HouseColorPipe } from '../../pipes/house-color.pipe';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [HouseColorPipe],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
  @Input() status: 'loading' | 'success' | 'empty' | 'error' = 'loading';
}
