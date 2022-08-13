
exports.Review = {
  product: ({ productId }, _args, { products }) => 
  products.find(({id}) => id === productId )
}