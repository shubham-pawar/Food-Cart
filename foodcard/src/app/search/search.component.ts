import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  searchTerm:String = "";
  constructor (private route:ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    })
  }
    
}
