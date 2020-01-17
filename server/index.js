const express = require('express'),
      app = express(),
      cors = require('cors');
      fridgeCtrl = require('./controllers/fridgeCtrl');

app.use(cors());
app.use(express.json())

//vv-Endpoints-vv

app.get('/api/items', fridgeCtrl.getItems);
app.post('/api/items', fridgeCtrl.addItem);
app.put('/api/items/:id', fridgeCtrl.updateItem);
app.delete('/api/items/:id', fridgeCtrl.deleteItem);
app.get('/api/items/:item', fridgeCtrl.searchFridge)

//^^-Endpoints-^^

const port = 5050;
app.listen(port, () => console.log(`Fridge running on port ${port}`))