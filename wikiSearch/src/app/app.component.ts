import { Component } from '@angular/core';
import { Article, SearchService } from './pages/search/services/search.services';
import { tap,Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wikiSearch';
  articles$ !: Observable<Article[]>;

  constructor( private readonly searchSvc: SearchService) {
      /*  this.searchSvc.search('angular')
      .pipe(
        tap(res => console.log (res))
      )
      .subscribe()  */
  }
  onSearch(term:string): void{
    this.articles$ = this.searchSvc.search(term)
      
    
  }
}
