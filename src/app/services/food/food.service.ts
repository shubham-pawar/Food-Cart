import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodByID(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[]{
    return [
      { name: 'All', count: 13 },
      { name: 'FastFood', count: 2 },
      { name: 'Lunch', count: 4 },
      { name: 'SlowFood', count: 4 },
      { name: 'Fry', count: 2 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: String): Food[] {

    return tag == "All" ? 
    this.getAll() : 
    this.getAll().filter(food => food.tags?.includes('tag'));
  }

  getAll(): Food[] {
    return[
      {
        id: 1,
        name: 'Biryani',
        cookTime: '10-20',
        price: 16,
        favorite: false,
        origins: ['india'],
        stars: 4.5,
        imageUrl: '../assets/images/foods/biryani.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 2,
        name: 'Butter Chicken',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'india'],
        stars: 4.7,
        imageUrl: '../assets/images/foods/butterchicken.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Chana Masala',
        price: 15,
        cookTime: '10-15',
        favorite: false,
        origins: ['srilanka', 'india'],
        stars: 3.5,
        imageUrl:  '../assets/images/foods/chanamasala.jpg',
        tags: ['Fry', 'SlowFood', 'Lunch'],
      },
      {
        id: 4,
        name: 'Dahi Vada',
        price: 12,
        cookTime: '15-20',
        favorite: true,
        origins: ['india', 'asia'],
        stars: 3.3,
        imageUrl: '../assets/images/foods/dahivada.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Noodles',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '../assets/images/foods/noodles.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 9,
        name:  'Pani Puri',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['india'],
        stars: 4.0,
        imageUrl: '../assets/images/foods/panipuri.jpg',
        tags: ['FastFood', 'Lunch'],
      },
    ]
  }
}
