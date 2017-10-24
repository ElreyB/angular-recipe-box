import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styles:[`
    .change-size {
      font-size: 30px;
    }
    h1, h2 {
      text-align : center;
    }
    .edit-button {
      width: 72px;
      float: right;
    }
    .edit-title {
      display: inline;
    }
    .display-recipe {
      list-style-type: none;
    }
    .justify-directions {
      text-align: justify;
    }
    `]
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Chipotle Taco Burger',["1 pound ground beef", "1/4 cup diced onion", "3 chipotle peppers in adobo sauce, seeded and diced", "1 teaspoon taco seasoning"], "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Use your hands to thoroughly mix ground beef, onion, chipotle peppers, and taco seasoning together in a bowl; shape into 4 patties. Cook burgers on preheated grill until firm, hot, and grey in the center, 7 to 10 minutes per side. An instant-read thermometer inserted into the center should read 160 degrees F (70 degrees C)."),
    new Recipe('Buffalo Chicken Mac and Cheese',["1 (16 ounce) package elbow macaroni", "1 rotisserie-roasted chicken", "6 tablespoons butter", "6 tablespoons all-purpose flour", "3 cups milk", "1 pinch ground black pepper","2 cups shredded Cheddar cheese","2 cups shredded Monterey Jack cheese","1/2 cup hot sauce (such as Frank's(R) Redhot(R)), or more to taste","1/2 cup crumbled gorgonzola cheese"], "Bring a large pot of lightly salted water to a boil. Cook macaroni in the boiling water, stirring occasionally until tender yet firm to the bite, 8 minutes. Drain.Cut wings and legs off rotisserie chicken. Skin and bone wings and legs; chop or shred dark meat into bite-size pieces.Melt butter in a large Dutch oven over medium heat. Whisk in flour gradually until a thick paste forms. Cook until golden, about 1 minute. Pour in milk, whisking constantly, until thickened and bubbling, about 5 minutes. Continue to cook until sauce is smooth, about 1 minute more. Reduce heat and season sauce with black pepper. Stir Cheddar and Monterey Jack cheese into the sauce until melted and combined. Stir in hot sauce, adjusting to reach desired level of spiciness. Add blue cheese, chicken, and macaroni; mix well to combine."),
    new Recipe('Spatchcock Chicken',["2 (3 1/2) pound whole chickens, wingtips removed", "2 teaspoons salt", "1 teaspoon dried tarragon", "1 teaspoon paprika", "1/4 teaspoon black pepper", "4 teaspoons olive oil", "2 lemons, thinly sliced and seeded"], "Preheat oven to 450 degrees F (230 degrees C). Line a large rimmed baking sheet with foil. Place chicken, breast side down, on a work surface. Starting at the tail end, cut along both sides of backbone with kitchen shears. Remove backbone. Grabbing hold of both sides of the chicken, open it like a book. Turn breast side up. Push down on each side of breast with your hands until you hear it crack. Flatten chicken and transfer to one short end of the prepared baking sheet. Repeat with the second chicken. Combine salt, tarragon, paprika, and pepper in a small bowl. Stir in oil. Run your fingers under chicken skin and rub tarragon paste under skin. Slide lemon slices under skin, in a single layer. Roast until skin is crisp and an instant-read thermometer inserted into thickest part of breast reads 165 degrees F, about 35 minutes. Let stand 5 minutes before cutting each chicken into 8 pieces.")
  ];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  showRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }


}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string) {}
}
