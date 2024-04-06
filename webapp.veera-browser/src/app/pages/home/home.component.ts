import { Component } from '@angular/core';
import {Router} from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // searchForm!: FormGroup;
  searchTerm = ""

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.searchForm = this.formBuilder.group({
    //   searchTerm: ['']
    // });
  }

  // search(): void {
  //   console.log('searchTerm', this.searchForm.value.searchTerm);
  //   const {search_term} = this.searchForm.value.searchTerm;
  //   this.router.navigateByUrl('/results', {state: {term: search_term}}).then();
  // }

  // search(): void {
  //   console.log(this.searchForm.value);
  //   this.router.navigateByUrl('/results', {state: {term: this.searchForm.value.searchTerm}}).then();
  // }

  search(form: NgForm): void {
    const {search_term} = form.value;
    this.router.navigateByUrl('/results', {state: {term: search_term}}).then();
  }

}
