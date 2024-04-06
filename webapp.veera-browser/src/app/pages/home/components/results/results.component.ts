import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../services/search.service';
import { GoogleResponse } from '../../../../Response.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  results!: GoogleResponse;
  term: any;
  subs: Subscription[] = [];
  constructor(
    private searchService: SearchService
  ){}

  ngOnInit(): void{
    console.log( history.state);
    const {term} = history.state;
    this.term = term;
    if (term) {
      this.subs.push(this.searchService.getSearchData(term).subscribe((data: GoogleResponse) => {
        console.log(data);
        
        this.results = data;
      }));
    }
  }
}
