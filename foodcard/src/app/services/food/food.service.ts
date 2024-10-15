import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return[
      {
        id: 1,
        name: 'Biryani',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: './assets/images/foods/biryani.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Butter Chicken',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: './assets/images/foods/butterchicken.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Chana Masala',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl:  './assets/images/foods/chanamasala.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Dahi Vada',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: './assets/images/foods/dahivada.jpg',
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
        imageUrl: './assets/images/foods/noodles.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name:  'Pani Puri',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: './assets/images/foods/panipuri.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
