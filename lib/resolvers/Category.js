const {filterProducts} = require('./utils/filterProducts');

exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => 
    filterProducts(db.products, { ...filter, categoryId})
}