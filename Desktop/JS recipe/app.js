// ===== Recipe Data =====
const recipes = [
  {
    id: 1,
    title: "Pasta Alfredo",
    time: 25,
    difficulty: "easy",
    description: "Creamy Italian pasta with garlic and parmesan cheese.",
    category: "pasta"
  },

  {
    id: 2,
    title: "Chicken Biryani",
    time: 60,
    difficulty: "hard",
    description: "Traditional spiced rice with tender chicken pieces.",
    category: "curry"
  },

  {
    id: 3,
    title: "Veg Salad",
    time: 10,
    difficulty: "easy",
    description: "Fresh mixed vegetable salad with lemon dressing.",
    category: "salad"
  },

  {
    id: 4,
    title: "Paneer Butter Masala",
    time: 40,
    difficulty: "medium",
    description: "Rich tomato gravy with soft paneer cubes.",
    category: "curry"
  },

  {
    id: 5,
    title: "Chocolate Cake",
    time: 70,
    difficulty: "hard",
    description: "Moist chocolate cake with creamy frosting.",
    category: "dessert"
  },

  {
    id: 6,
    title: "Fried Rice",
    time: 30,
    difficulty: "medium",
    description: "Quick stir fried rice with vegetables.",
    category: "rice"
  },

  {
    id: 7,
    title: "Fruit Smoothie",
    time: 8,
    difficulty: "easy",
    description: "Healthy blend of mixed fruits and yogurt.",
    category: "drink"
  },

  {
    id: 8,
    title: "Grilled Sandwich",
    time: 15,
    difficulty: "easy",
    description: "Crispy grilled sandwich with cheese and veggies.",
    category: "snack"
  }
];

// ===== Select Container =====
const recipeContainer =
  document.querySelector("#recipe-container");

// ===== Create Card Function =====
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>

      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>

        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>

      <p>${recipe.description}</p>
    </div>
  `;
};

// ===== Render Function =====
const renderRecipes = (recipesArray) => {

  const html = recipesArray
      .map(createRecipeCard)
      .join("");

  recipeContainer.innerHTML = html;
};

// ===== Initialize App =====
renderRecipes(recipes);
