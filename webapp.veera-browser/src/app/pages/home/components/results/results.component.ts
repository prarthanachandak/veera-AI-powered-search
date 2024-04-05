import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../services/search.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit {
  results: any[]=[];
  count=0;
  constructor(
    private searchService: SearchService
  ){}

  ngOnInit(): void{
    this.searchService.getPassedResults().subscribe((response:any)=>{
      this.results =response.results;
      this.count = response.count;
      console.log('results and count', this.results, this.count);
      

    },
  (error:any)=>{
    console.log('error occured', error)
  })
  }
}
