import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // Create new event emitter
  @Output() submitted = new EventEmitter<String>();
  term = '';
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    // prevent default behaviour of form submission
    event.preventDefault(); 
    // communicate information
    this.submitted.emit(this.term);
  }


}
