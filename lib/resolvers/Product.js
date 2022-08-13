
exports.Product = {
  category: ({ categoryId }, _args, { db }) => 
    db.categories.find((category) => category.id === categoryId ),
  reviews: ({ id }, _args, { db }) => db.reviews.filter(({ productId }) => productId === id)
}