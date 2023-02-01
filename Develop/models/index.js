// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Categories have many Products
  foreignKey: 'category_id'
});
  Category.hasMany(Product, {
    foreignKey: 'category_id'
  })

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
// Tags belongToMany Products (through ProductTag)
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id'
});
  Tag.belongsToMany(Product, {
    through: {
      model: ProductTag,
      unique: false
    },
    foreignKey: 'tag_id'
  })


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
