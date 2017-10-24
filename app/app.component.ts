import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>My Recipe Box</h1>
      <ul>
        <li *ngFor="let recipe of recipes" class="well">
          <h3 class="change-color">{{recipe.title}}</h3>
          <ul>
            <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
          </ul>
          <br>
          <p>{{recipe.directions}}</p>
        </li>
      </ul>
    </div>
    `,
  styles:[`
    .change-color {
      background-color: yellow;
    }
    h1 {
      text-align : center;
    }
    `]
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Chipotle Taco Burger',["1 pound ground beef", "1/4 cup diced onion", "3 chipotle peppers in adobo sauce, seeded and diced", "1 teaspoon taco seasoning"], "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Use your hands to thoroughly mix ground beef, onion, chipotle peppers, and taco seasoning together in a bowl; shape into 4 patties. Cook burgers on preheated grill until firm, hot, and grey in the center, 7 to 10 minutes per side. An instant-read thermometer inserted into the center should read 160 degrees F (70 degrees C)."),
    new Recipe('Chipotle Taco Burger',["1 pound ground beef", "1/4 cup diced onion", "3 chipotle peppers in adobo sauce, seeded and diced", "1 teaspoon taco seasoning"], "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Use your hands to thoroughly mix ground beef, onion, chipotle peppers, and taco seasoning together in a bowl; shape into 4 patties. Cook burgers on preheated grill until firm, hot, and grey in the center, 7 to 10 minutes per side. An instant-read thermometer inserted into the center should read 160 degrees F (70 degrees C)."),
    new Recipe('Chipotle Taco Burger',["1 pound ground beef", "1/4 cup diced onion", "3 chipotle peppers in adobo sauce, seeded and diced", "1 teaspoon taco seasoning"], "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Use your hands to thoroughly mix ground beef, onion, chipotle peppers, and taco seasoning together in a bowl; shape into 4 patties. Cook burgers on preheated grill until firm, hot, and grey in the center, 7 to 10 minutes per side. An instant-read thermometer inserted into the center should read 160 degrees F (70 degrees C).")
  ]
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string) {}
}
