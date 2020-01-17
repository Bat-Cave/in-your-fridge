const itemsInFridge = [{
    id: 0,
    item: "Apples",
    qty: "4",
    unit: "",
    exp: "2020-01-21"
  },
  {
    id: 1,
    item: "Milk",
    qty: "2",
    unit: "gal",
    exp: "2020-01-21"
  },
  {
    id: 2,
    item: "Butter",
    qty: "16",
    unit: "oz",
    exp: "2020-01-21"
  },
  {
    id: 3,
    item: "Iceberg Lettuce",
    qty: "2",
    unit: "",
    exp: "2020-01-21"
  },
  {
    id: 4,
    item: "Milk",
    qty: "2",
    unit: "gal",
    exp: "2020-01-21"
  },
  {
    id: 5,
    item: "Butter",
    qty: "16",
    unit: "oz",
    exp: "2020-01-21"
  },
  {
    id: 6,
    item: "Iceberg Lettuce",
    qty: "2",
    unit: "",
    exp: "2020-01-21"
  }
];
let id = 0;

module.exports = {
  getItems: (req, res) => {
    res.status(200).send(itemsInFridge);
  },
  addItem: (req, res) => {
    const { item, qty, unit, exp } = req.body;
    const newItem = {
      id: id++,
      item,
      qty,
      unit,
      exp
    };
    itemsInFridge.push(newItem);
    res.status(200).send(itemsInFridge);
  },
  updateItem: (req, res) => {
    const {id} = req.params;
    const { itemEdit, qtyEdit, unitEdit, expEdit } = req.body;
    const i = itemsInFridge.findIndex(e => e.id === +id);
    itemsInFridge[id].item = itemEdit;
    itemsInFridge[id].qty = qtyEdit;
    itemsInFridge[id].unit = unitEdit;
    itemsInFridge[id].exp = expEdit
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