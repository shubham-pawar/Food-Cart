import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  foods: Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAll().filter(food => 
      food.name.toLocaleLowerCase().includes(params['searchTerm'].toLocaleLowerCase()));
      else
      this.foods = this.foodService.getAll();
    })
  }
  
}
