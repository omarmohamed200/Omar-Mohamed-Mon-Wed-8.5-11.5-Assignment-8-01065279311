var meals = [
  {
    name: "Pad Thai",
    image: "meal-1.avif",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    category: "Asian",
    level: "Intermediate",
    ratingsAverage: 4.8,
    ratingsQunatity: 445,
    prepTime: 20 + "min",
    cookingTime: 15 + "min",
    servings: 2 + "people",
    ingredients: [
      "200g rice noodles",
      "200g shrimp",
      "2 eggs",
      "Tamarind paste",
      "Fish sauce",
      "Bean sprouts",
      "Crushed peanuts",
    ],
    instructions: [
      "Soak noodles.",
      "Prepare sauce.",
      "Cook shrimp and eggs.",
      "Add noodles and sauce.",
      "Serve with peanuts.",
    ],
    nutrition: {
      calories: 540,
      protein: 32,
      carbohydrates: 62,
      fat: 16,
      fiber: 4,
      sodium: 1120,
    },
    tips: ["Cook on high heat", "Prepare ingredients first"],
    isExtended: false,
  },

  {
    name: "Chicken Biryani",
    image: "meal-2.avif",
    description:
      "Traditional Indian rice dish with aromatic spices and chicken",
    category: "Indian",
    level: "Intermediate",
    ratingsAverage: 4.9,
    ratingsQunatity: 620,
    prepTime: 25 + "min",
    cookingTime: 40 + "min",
    servings: 5 + "people",
    ingredients: [
      "Basmati rice",
      "Chicken",
      "Yogurt",
      "Onions",
      "Biryani spices",
    ],
    instructions: [
      "Marinate chicken.",
      "Cook rice.",
      "Prepare masala.",
      "Layer rice and chicken.",
      "Steam before serving.",
    ],
    nutrition: {
      calories: 680,
      protein: 38,
      carbohydrates: 78,
      fat: 22,
      fiber: 5,
      sodium: 980,
    },
    tips: ["Use aged basmati rice", "Do not overcook rice"],
    isExtended: true,
  },

  {
    name: "Margherita Pizza",
    image: "meal-3.jpg",
    description: "Classic Italian pizza topped with mozzarella and basil",
    category: "Italian",
    level: "Beginner",
    ratingsAverage: 4.7,
    ratingsQunatity: 510,
    prepTime: 15 + "min",
    cookingTime: 12 + "min",
    servings: 2 + "people",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Basil",
      "Olive oil",
    ],
    instructions: [
      "Stretch dough.",
      "Add toppings.",
      "Bake in hot oven.",
      "Garnish with basil.",
    ],
    nutrition: {
      calories: 520,
      protein: 22,
      carbohydrates: 58,
      fat: 20,
      fiber: 3,
      sodium: 760,
    },
    tips: ["Use fresh mozzarella", "Preheat oven well"],
    isExtended: false,
  },

  {
    name: "Beef Wellington",
    image: "meal-4.avif",
    description: "Tender beef wrapped in mushroom duxelles and puff pastry",
    category: "European",
    level: "Advanced",
    ratingsAverage: 4.9,
    ratingsQunatity: 380,
    prepTime: 35 + "min",
    cookingTime: 45 + "min",
    servings: 4 + "people",
    ingredients: [
      "Beef tenderloin",
      "Puff pastry",
      "Mushrooms",
      "Prosciutto",
      "Egg yolk",
    ],
    instructions: [
      "Sear beef.",
      "Prepare mushroom mixture.",
      "Wrap beef.",
      "Cover with pastry.",
      "Bake until golden.",
    ],
    nutrition: {
      calories: 760,
      protein: 48,
      carbohydrates: 34,
      fat: 46,
      fiber: 3,
      sodium: 890,
    },
    tips: ["Chill before baking", "Use a thermometer"],
    isExtended: true,
  },

  {
    name: "Greek Salad",
    image: "meal-5.avif",
    description: "Fresh Mediterranean salad with feta cheese and olives",
    category: "Mediterranean",
    level: "Beginner",
    ratingsAverage: 4.6,
    ratingsQunatity: 290,
    prepTime: 15 + "min",
    cookingTime: 0 + "min",
    servings: 3 + "people",
    ingredients: ["Tomatoes", "Cucumber", "Feta cheese", "Olives", "Olive oil"],
    instructions: [
      "Chop vegetables.",
      "Add feta and olives.",
      "Dress with olive oil.",
      "Serve fresh.",
    ],
    nutrition: {
      calories: 260,
      protein: 8,
      carbohydrates: 12,
      fat: 20,
      fiber: 4,
      sodium: 540,
    },
    tips: ["Use ripe tomatoes", "Serve immediately"],
    isExtended: false,
  },
];

var mealName = document.getElementById("mealName");
var prepTime = document.getElementById("prepTime");
var cookingTime = document.getElementById("cookingTime");
var servings = document.getElementById("servings");
var level = document.getElementById("level");
var category = document.getElementById("category");
var description = document.getElementById("description");
var ratingsAverage = document.getElementById("ratingsAverage");
var ratingsQunatity = document.getElementById("ratingsQunatity");
var image = document.getElementById("image");
var ingredients = document.getElementById("ingredients");
var instructions = document.getElementById("instructions");
var nutrition = document.getElementById("nutrition");
var tips = document.getElementById("tips");
var isExtended = document.getElementById("isExtended");

var random, index;
var currentmeal;
function generate() {
  do {
    random = Math.floor(Math.random() * meals.length);
  } while (random == index);

  index = random;
  currentmeal = meals[random];
  console.log(currentmeal);
  mealName.innerHTML = currentmeal.name;
  prepTime.innerHTML = currentmeal.prepTime;
  cookingTime.innerHTML = currentmeal.cookingTime;
  servings.innerHTML = currentmeal.servings;
  level.innerHTML = currentmeal.level;
  category.innerHTML = currentmeal.category;
  description.innerHTML = currentmeal.description;
  ratingsAverage.innerHTML = currentmeal.ratingsAverage;
  ratingsQunatity.innerHTML = currentmeal.ratingsQunatity;
  image.src = `./images/${currentmeal.image}`;
  displayIngredients();
  displayInstructions();
  displayNutrition();
  displayTips();
  displayAlert();
}
function displayIngredients() {
  var box = "";
  for (var i = 0; i < currentmeal.ingredients.length; i++) {
    box += `
      <li class="d-flex justify-content-start align-items-start list-unstyled my-3">
        <div class="point text-white w-fit px-2 me-3">${i + 1}</div>
        <span>${currentmeal.ingredients[i]}</span>
      </li>
    `;
  }
  ingredients.innerHTML = box;
}

function displayInstructions() {
  var box = "";
  for (var i = 0; i < currentmeal.instructions.length; i++) {
    box += ` <li
                      class="d-flex justify-content-start align-items-start list-unstyled my-3"
                    >
                      <div
                        class="instruct text-white w-fit px-2 me-3 fw-bold py-2 px-3 fs-5"
                      >
                        ${i + 1}
                      </div>
                      <p class="my-auto">
                      ${currentmeal.instructions[i]}
                      </p>
                    </li>`;
  }
  instructions.innerHTML = box;
}

function displayNutrition() {
  var box = "";

  for (var i = 0; i < currentmeal.nutrition.length; i++) {
    box += ` <div class="col-md-6">
                      <div
                        class="column d-flex justify-content-between align-item-start p-3 rounded-4"
                      >
                        <div
                          class="iconic-1 d-flex justify-content-start align-items-start"
                        >
                          <span class="p-2 me-3 rounded-3">
                            <i class="fa-solid fa-fire text-sec"></i>
                          </span>
                          <p class="my-auto">${i + 1}</p>
                        </div>
                        <p class="my-auto fs-5 fw-bold">${currentmeal.nutrition[i]}</p>
                      </div>
                    </div>`;
  }
  nutrition.innerHTML = box;
}
function displayTips() {
  var box = "";

  for (var i = 0; i < currentmeal.tips.length; i++) {
    box += ` <div
                      class="border-start border-4 border-warning bg-main d-flex justify-content-start p-4 rounded-3 mb-3"
                    >
                      <i
                        class="fa-solid fa-circle-check text-sec fs-5 my-auto me-3"
                      ></i>
                      <p class="my-auto">
                       ${currentmeal.tips[i]}
                      </p>
                    </div>`;
  }
  tips.innerHTML = box;
}

function displayAlert() {
  var box = "";
  ` <div class="alert bg-main d-flex justify-content-start rounded-3">
                <i
                  class="fa-solid fa-triangle-exclamation text-danger fs-4 my-auto me-3"
                ></i>
                <div class="my-auto">
                  <p class="head-title text-danger fw-bold mb-1">
                   ${i + 1}
                  </p>
                  <p class="subtitle mt-0">
                   ${currentmeal.isExtended[i]}
                  </p>
                </div>
              </div>`;

  isExtended.innerHTML = currentmeal.isExtended ? box : "";
}
generate();
