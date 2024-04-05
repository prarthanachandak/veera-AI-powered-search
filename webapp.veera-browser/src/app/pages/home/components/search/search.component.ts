import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../../../services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {
  searchForm!: FormGroup;
  searchTerm = ""

  constructor(private formBuilder: FormBuilder, private searchService:SearchService) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['']
    });
  }

  searchWeb(): void {
    console.log('searchTerm', this.searchForm.value.searchTerm);
    if(this.searchForm.value.searchTerm==='')return;
    this.searchService.getResults(this.searchForm.value.searchTerm).subscribe((response:any)=>{
      this.searchService.passResults({results:response.value, count:response.totalCount})
    },
  (error:any)=>{
    console.log('error occured', error);
    
  })
    
  }
}
