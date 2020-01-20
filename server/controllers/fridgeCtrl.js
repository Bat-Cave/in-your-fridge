const itemsInFridge = [{
    id: 0,
    item: "Apples",
    qty: "4",
    unit: "",
    cat: 'Fruit',
    exp: "01/21/2020"
  },
  {
    id: 1,
    item: "Milk",
    qty: "2",
    unit: "gal",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 2,
    item: "Butter",
    qty: "16",
    unit: "oz",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 3,
    item: "Iceberg Lettuce",
    qty: "2",
    unit: "",
    cat: 'Vegetable',
    exp: "01/21/2020"
  },
  {
    id: 4,
    item: "Peach Jelly",
    qty: "16",
    unit: "oz",
    cat: 'Fruit',
    exp: "01/21/2020"
  },
  {
    id: 5,
    item: "Cherry Tomatoes",
    qty: "16",
    unit: "",
    cat: 'Fruit',
    exp: "01/21/2020"
  },
  {
    id: 6,
    item: "Italian Dressing",
    qty: "16",
    unit: "oz",
    cat: 'Condiment',
    exp: "01/21/2020"
  },
  {
    id: 7,
    item: "Cucumbers",
    qty: "4",
    unit: "",
    cat: 'Vegetable',
    exp: "01/21/2020"
  },
  {
    id: 8,
    item: "Ground Beef",
    qty: "2",
    unit: "lb",
    cat: 'Protein',
    exp: "01/21/2020"
  },
  {
    id: 9,
    item: "Shredded Cheddar Cheese",
    qty: "4",
    unit: "c",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 10,
    item: "Spinach",
    qty: "4",
    unit: "c",
    cat: 'Vegetable',
    exp: "01/21/2020"
  },
  {
    id: 11,
    item: "Peach Yogurt",
    qty: "36",
    unit: "oz",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 12,
    item: "Chocolate Cake",
    qty: "1",
    unit: "",
    cat: 'Snack/Sweets',
    exp: "01/21/2020"
  },
  {
    id: 13,
    item: "Green Beans",
    qty: "3",
    unit: "c",
    cat: 'Vegetable',
    exp: "01/21/2020"
  }
];
const recipes = [{
  id: 0,
  recipe: 'Oreos & Milk',
  ingredients: ['oreos', 'milk']
  },
  {
    id: 1,
    recipe: 'PB & J',
    ingredients: ['bread', 'peanut butter', 'jelly']
  },
  {
    id: 2,
    recipe: 'Chicken & Rice',
    ingredients: ['chicken', 'rice']
  },
  {
    id: 3,
    recipe: 'Ham & Cheese Sandwich',
    ingredients: ['bread', 'mayo', 'ham', 'cheese']
  },
  {
    id: 4,
    recipe: 'Ramen',
    ingredients: ['Ramen', 'water']
  },
  {
    id: 5,
    recipe: 'Salad',
    ingredients: ['lettuce', 'carrots', 'cherry tomatoes', 'cucumbers', 'italian dressing']
  },
  {
    id: 6,
    recipe: 'Apples & Peanut Butter',
    ingredients: ['apples', 'peanut butter']
  }
]
let itemId = 13;
let recipeId = 6;

module.exports = {
  getItems: (req, res) => {
    res.status(200).send(itemsInFridge);
  },
  getRecipes: (req, res) => {
    res.status(200).send(recipes);
  },
  addItem: (req, res) => {
    const { item, qty, unit, cat, exp } = req.body;
    const newItem = {
      id: itemId++,
      item,
      qty,
      unit,
      cat,
      exp
    };
    itemsInFridge.push(newItem);
    res.status(200).send(itemsInFridge);
  },
  addRecipe: (req, res) => {
    const { recipe, ing } = req.body;
    const newRecipe = {
      id: recipeId++,
      recipe,
      ingredients: ing
    };
    recipes.push(newRecipe);
    res.status(200).send(recipes);
  },
  updateItem: (req, res) => {
    const {id} = req.params;
    const { itemEdit, qtyEdit, unitEdit, catEdit, expEdit } = req.body;
    const mmdd = expEdit.split('').splice(5, 5).join('').replace('-', '/');
    const yyyy = `/${expEdit.split('').splice(0, 4).join('').replace('-', '/')}`;
    if(expEdit.includes('/')){
      itemsInFridge[id].exp = expEdit;
    } else { 
      itemsInFridge[id].exp = `${mmdd}${yyyy}`
    }
    itemsInFridge[id].item = itemEdit ;
    itemsInFridge[id].qty = qtyEdit;
    itemsInFridge[id].unit = unitEdit;
    itemsInFridge[id].cat = catEdit;
    res.status(200).send(itemsInFridge);
  },
  updateRecipe: (req, res) => {
    const {id} = req.params;
    const { recipeEdit, split } = req.body;
    recipes[id].recipe = recipeEdit ;
    recipes[id].ingredients = split;
    res.status(200).send(itemsInFridge);
  },
  deleteItem: (req, res) => {
    const {id} = req.params;
    const i = itemsInFridge.findIndex(e => e.id === +id);
    itemsInFridge.splice(i, 1);
    res.status(200).send(itemsInFridge);
  },
  deleteRecipe: (req, res) => {
    const {id} = req.params;
    const i = recipes.findIndex(e => e.id === +id);
    recipes.splice(i, 1);
    res.status(200).send(recipes);
  },
  searchFridge: (req, res) => {
    const { item } = req.params;
    const filteredItems = itemsInFridge.filter(i => i.item.includes(item));
    res.status(200).send(filteredItems)
  }
}