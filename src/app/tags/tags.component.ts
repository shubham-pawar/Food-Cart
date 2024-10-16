import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{

  @Input()
  foodPageTags?:String[];
  
  @Input()
  JustifyContent:string = 'center'

  tags?:Tag[];

  constructor(private foodService:FoodService){}

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodService.getAllTags();
  }
}
