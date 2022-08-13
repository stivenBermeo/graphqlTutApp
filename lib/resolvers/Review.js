
exports.Review = {
  product: ({ productId }, _args, { db }) => 
  db.products.find(({id}) => id === productId )
}