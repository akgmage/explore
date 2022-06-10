import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'explore';

  constructor(private wikipedia: WikipediaService) {

  }

  onTerm(term: string) {
    const results = this.wikipedia.search(term);
    console.log(results);
  }
}
