import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from "../tags/tags.component";
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule, SearchComponent, TagsComponent, RouterLink, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  foods: Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['SearchTerm']);
      else if(params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
      this.foods = this.foodService.getAll();
    })
  }
  
}
