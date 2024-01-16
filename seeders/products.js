const { nanoid } = require("nanoid")
const { addCollectionAndDocuments } = require("./firestore");
const shop = require("./shop.js")

shop.forEach(async (category) => {
  category.id = category.title.toLowerCase()
  category.items.forEach(item => {
    item.id = nanoid(20)
  })
});

addCollectionAndDocuments("products", shop)