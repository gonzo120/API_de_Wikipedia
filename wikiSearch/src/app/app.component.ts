import { Component } from '@angular/core';
import { SearchService } from './pages/search/services/search.services';
import { tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wikiSearch';
  constructor( private readonly searchSvc: SearchService) {
    this.searchSvc.search('angular')
      .pipe(
        tap(res => console.log (res))
      )
      .subscribe()
  }
}
