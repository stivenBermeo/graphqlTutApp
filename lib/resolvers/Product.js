
exports.Product = {
  category: ({ categoryId }, _args, { categories }) => 
    categories.find((category) => category.id === categoryId ),
  reviews: ({ id }, _args, { reviews }) => reviews.filter(({ productId }) => productId === id)
}