import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changesearchValue(eventData: Event){
     //console.log((<HTMLInputElement>eventData.target).value);
     this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

}
