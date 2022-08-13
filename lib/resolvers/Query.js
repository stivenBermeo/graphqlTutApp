const { filterProducts } = require("./utils/filterProducts");

exports.Query = {
  products: (_parent, { filter }, { db }) =>  filterProducts(db.products, filter),
  product: (_parent, { id }, { db }) =>  db.products.find(({ id: productId }) => productId === id ),

  categories: (_parent, _args, { db }) => db.categories,
  category: (_parent, { id }, { db }) =>  db.categories.find(({ id: categoryId }) => categoryId === id ),

  reviews: (_parent, { productId }, { db }) => db.reviews.filter( (review) => productId === review.productId),
  review: (_parent, { id }, { db }) =>  db.reviews.find(({ id: reviewId }) => reviewId === id ),
}