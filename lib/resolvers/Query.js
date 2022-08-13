const { filterProducts } = require("./utils/filterProducts");

exports.Query = {
  products: (_parent, { filter }, { products }) =>  filterProducts(products, filter),
  product: (_parent, { id }, { products }) =>  products.find(({ id: productId }) => productId === id ),

  categories: (_parent, _args, { categories}) => categories,
  category: (_parent, { id }, { categories}) =>  categories.find(({ id: categoryId }) => categoryId === id ),

  reviews: (_parent, { productId }, { reviews }) => reviews.filter( ({ id }) => productId === id),
  review: (_parent, { id }, { reviews }) =>  reviews.find(({ id: reviewId }) => reviewId === id ),
}