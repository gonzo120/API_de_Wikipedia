import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  constructor() {
    this.onChange();
  }

  ngOnInit(): void { }

  onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search: string | null) => search ? search.trim() : ''),
        debounceTime(350),
        distinctUntilChanged(),
        tap((search: string) => {
          if (search !== '') {
            this.submitted.emit(search);
          }
        })
      )
      .subscribe();
  }
}
