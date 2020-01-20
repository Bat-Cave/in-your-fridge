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
    item: "Milk",
    qty: "2",
    unit: "gal",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 5,
    item: "Butter",
    qty: "16",
    unit: "oz",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 6,
    item: "Iceberg Lettuce",
    qty: "2",
    unit: "",
    cat: 'Vegetable',
    exp: "01/21/2020"
  },
  {
    id: 7,
    item: "Apples",
    qty: "4",
    unit: "",
    cat: 'Fruit',
    exp: "01/21/2020"
  },
  {
    id: 8,
    item: "Milk",
    qty: "2",
    unit: "gal",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 9,
    item: "Butter",
    qty: "16",
    unit: "oz",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 10,
    item: "Iceberg Lettuce",
    qty: "2",
    unit: "",
    cat: 'Vegetable',
    exp: "01/21/2020"
  },
  {
    id: 11,
    item: "Milk",
    qty: "2",
    unit: "gal",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 12,
    item: "Butter",
    qty: "16",
    unit: "oz",
    cat: 'Dairy',
    exp: "01/21/2020"
  },
  {
    id: 13,
    item: "Iceberg Lettuce",
    qty: "2",
    unit: "",
    cat: 'Vegetable',
    exp: "01/21/2020"
  }
];
let id = 0;

module.exports = {
  getItems: (req, res) => {
    res.status(200).send(itemsInFridge);
  },
  addItem: (req, res) => {
    const { item, qty, unit, cat, exp } = req.body;
    const newItem = {
      id: id++,
      item,
      qty,
      unit,
      cat,
      exp
    };
    itemsInFridge.push(newItem);
    res.status(200).send(itemsInFridge);
  },
  updateItem: (req, res) => {
    const {id} = req.params;
    const { itemEdit, qtyEdit, unitEdit, catEdit, expEdit } = req.body;
    const i = itemsInFridge.findIndex(e => e.id === +id);
    const mmdd = expEdit.split('').splice(5, 5).join('').replace('-', '/');
    const yyyy = expEdit.split('').splice(0, 5).join('').replace('-', '/');
    itemsInFridge[id].item = itemEdit ;
    itemsInFridge[id].qty = qtyEdit;
    itemsInFridge[id].unit = unitEdit;
    itemsInFridge[id].cat = catEdit;
    itemsInFridge[id].exp = `${mmdd}${yyyy}`
    res.status(200).send(itemsInFridge);
  },
  deleteItem: (req, res) => {
    const {id} = req.params;
    const i = itemsInFridge.findIndex(e => e.id === +id);
    itemsInFridge.splice(i, 1);
    res.status(200).send(itemsInFridge);
  },
  searchFridge: (req, res) => {
    const { item } = req.params;
    const filteredItems = itemsInFridge.filter(i => i.item.includes(item));
    res.status(200).send(filteredItems)
  }
}