import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { CommonModule } from '@angular/common';
import { TagsComponent } from "../tags/tags.component";
import { CartService } from '../services/cart/cart.service';
import { Router, RouterModule } from '@angular/router';
import { NotFoundComponent } from "../not-found/not-found.component";
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TagsComponent, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
      activatedRoute.params.subscribe((params) => {
      if(params['id']) {
        this.food = foodService.getFoodByID(params['id']);
        }
      })
    }
    
  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
