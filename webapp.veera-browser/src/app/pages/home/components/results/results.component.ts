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
  resultData: any = {
    summary: {
      headline: "Difference between Extractive and Generative Summary",
      paragraph: "Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications. Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.Extractive text summarization involves extracting important sentences from the original text, while generative text summarization creates new information from scratch. Extractive AI is like a fancy copy-paste machine on steroids, used for tasks like summarizing articles. On the other hand, generative AI acts as a robot writer, generating new stories, poetry, and songs. Each method has its own strengths and applications.",
      html: "",
      media: []
    }
  }

  expandFirstCard = false;

  
  results!: any;
  term: any;
  subs: Subscription[] = [];
  constructor(
    private searchService: SearchService
  ){}

  ngOnInit(): void{
    const {term} = history.state;
    this.term = term;
    if (term) {
      this.subs.push(this.searchService.getSearchData(term).subscribe((data: any) => {
        console.log(data);
        
        this.results = data;
      }));
    }
  }
}
