import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('');
  constructor(){
    this.inputSearch.valueChanges
    .pipe(
      tap(res=> console.log('Input ->', res))
    )
    .subscribe()
  }
  ngOnInit(): void {

  }
}
