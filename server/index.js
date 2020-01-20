const express = require('express'),
      app = express(),
      cors = require('cors');
      fridgeCtrl = require('./controllers/fridgeCtrl');

app.use(cors());
app.use(express.json())

//vv-Endpoints-vv

app.get('/api/items', fridgeCtrl.getItems);
app.get('/api/recipes', fridgeCtrl.getRecipes);
app.post('/api/items', fridgeCtrl.addItem);
app.post('/api/recipes', fridgeCtrl.addRecipe);
app.put('/api/items/:id', fridgeCtrl.updateItem);
app.put('/api/recipes/:id', fridgeCtrl.updateRecipe);
app.delete('/api/items/:id', fridgeCtrl.deleteItem);
app.delete('/api/recipes/:id', fridgeCtrl.deleteRecipe);
app.get('/api/items/:item', fridgeCtrl.searchFridge)

//^^-Endpoints-^^

const port = 5050;
app.listen(port, () => console.log(`Fridge running on port ${port}`))