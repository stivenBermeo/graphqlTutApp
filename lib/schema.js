const { gql } = require('apollo-server');

typeDefs = gql`
  type Query {
    products(filter: ProductsFilterInput): [Product] 
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews(productId: ID!): [Review]!
    review(id: ID!): Review
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product
    addReview(input: AddReviewInput): Review

    removeCategory(id:ID!): Boolean!
    removeProduct(id:ID!): Boolean!

    updateCategory(input: updateCategoryInput): Boolean!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
    category: Category
    reviews: [Review!]!
    image: String
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    title: String!
    comment: String!
    rating: Int!
    date: String!
    productId: ID!
    product: Product!
  }

  input ArithmeticFilter {
    field: String!
    operator: String!
    value: Int!
    process: String
  } 

  input ProductsFilterInput {
    onSale: Boolean
    by: ArithmeticFilter
  }

  input AddCategoryInput {
    name: String!
  }
  input updateCategoryInput {
    id: ID!
    name: String!
  }
  input AddReviewInput {
    title: String!
    comment: String!
    rating: Int!
    date: String!
    productId: ID!
  }
  input AddProductInput {
    name: String!
    description: String
    quantity: Int
    price: Float
    onSale: Boolean
    categoryId: ID!
    image: String 
  }
`;

module.exports = typeDefs;