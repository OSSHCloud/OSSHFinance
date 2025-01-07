import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss'],
})
export class InputAutocompleteComponent {
  @Input() label: string = 'Label';
  @Input() control = new FormControl();
  @Input() values: any[] = [];

  filteredValues: any[] = [];

  constructor() {}

  ngOnInit() {}

  filterValues(event: any) {}
}
