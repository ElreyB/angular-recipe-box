import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="page-header">
        <h1>My Recipe Box</h1>
      </div>
      <ul>
        <li *ngFor="let currentRecipe of recipes" class="well">
        <button (click)="editRecipe(currentRecipe)" type="button" class="btn btn-danger edit" aria-label="Left Align">
          <span class="input-group-addon" id="basic-addon1">X</span>
        </button>
          <h3 class="change-color">{{currentRecipe.title}}</h3>
          <ul>
            <li *ngFor="let ingredient of currentRecipe.ingredients">{{ingredient}}</li>
          </ul>
          <br>
          <p>{{currentRecipe.directions}}</p>
        </li>
      </ul>
      <br>
      <div *ngIf="selectedRecipe" class="well">
        <h3 class="change-color">{{selectedRecipe.title}}</h3>
        <input [(ngModel)]="selectedRecipe.title">
      </div>
    `,
  styles:[`
    .change-color {
      font-size: 30px;
    }
    h1 {
      text-align : center;
    }
    .edit {
      width: 56px;
      float: right;
    }
    `]
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Chipotle Taco Burger',["1 pound ground beef", "1/4 cup diced onion", "3 chipotle peppers in adobo sauce, seeded and diced", "1 teaspoon taco seasoning"], "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Use your hands to thoroughly mix ground beef, onion, chipotle peppers, and taco seasoning together in a bowl; shape into 4 patties. Cook burgers on preheated grill until firm, hot, and grey in the center, 7 to 10 minutes per side. An instant-read thermometer inserted into the center should read 160 degrees F (70 degrees C)."),
    new Recipe('Chipotle Taco Burger',["1 pound ground beef", "1/4 cup diced onion", "3 chipotle peppers in adobo sauce, seeded and diced", "1 teaspoon taco seasoning"], "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Use your hands to thoroughly mix ground beef, onion, chipotle peppers, and taco seasoning together in a bowl; shape into 4 patties. Cook burgers on preheated grill until firm, hot, and grey in the center, 7 to 10 minutes per side. An instant-read thermometer inserted into the center should read 160 degrees F (70 degrees C)."),
    new Recipe('Chipotle Taco Burger',["1 pound ground beef", "1/4 cup diced onion", "3 chipotle peppers in adobo sauce, seeded and diced", "1 teaspoon taco seasoning"], "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Use your hands to thoroughly mix ground beef, onion, chipotle peppers, and taco seasoning together in a bowl; shape into 4 patties. Cook burgers on preheated grill until firm, hot, and grey in the center, 7 to 10 minutes per side. An instant-read thermometer inserted into the center should read 160 degrees F (70 degrees C).")
  ];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string) {}
}
