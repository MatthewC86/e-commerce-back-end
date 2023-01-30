// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Categories have many Products
  through: {
    model: Category,
    unique: false
  },
  as: 'product_categories'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
// Tags belongToMany Products (through ProductTag)
  through: {
    model: Tag,
    unique: false
  },
  as: 'product_tags'
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
