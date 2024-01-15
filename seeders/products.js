const { createData } = require("./firestore");

let shop = require("./shop-data.json")

shop.forEach((x) => {
  delete x.id;
});

createData("products", shop)

