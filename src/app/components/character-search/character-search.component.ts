import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './character-search.component.html',
  styleUrl: './character-search.component.css'
})
export class CharacterSearchComponent {
  @Output() searchChanged = new EventEmitter<{ name: string; house: string }>();

  filterForm = new FormGroup({
    name: new FormControl(''),
    house: new FormControl('')
  });

  onFilter(): void {
    this.searchChanged.emit({
      name: this.filterForm.value.name ?? '',
      house: this.filterForm.value.house ?? ''
    });
  }
}
