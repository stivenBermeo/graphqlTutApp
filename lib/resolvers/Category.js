const {filterProducts} = require('./utils/filterProducts');

exports.Category = {
  products: ({ id: categoryId }, { filter }, { products }) => 
    filterProducts(products, { ...filter, categoryId})
}