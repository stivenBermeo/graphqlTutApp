const uuid = require('uuid');
const { save } = require('./utils/save');

exports.Mutation = {

  addCategory: (_parent, { input }, { categories }) =>  {
    const { name } = input;

    const newCategory = { name, id: uuid.v4() }; 
    categories.push(newCategory);

    save('categories', categories);
    return newCategory;
  },
  addProduct: (_parent, { input }, { categories, products }) =>  {
    const { 
      name, // : String!
      description, // : String!
      quantity, // : Int!
      price, // : Float!
      onSale, // : Boolean!
      categoryId, // : ID!
      image, // : String 
    } = input;

    if (!categories.find( ({ id }) => id === categoryId )) {
      return null;
    }

    const newProduct = { 
      id: uuid.v4(), 
      name, 
      description, 
      quantity, 
      price, 
      onSale, 
      categoryId,
      image
    }; 

    products.push(newProduct);

    save('products', products);
    return newProduct;
  },
  addReview: (_parent, { input }, { products, reviews }) =>  {
    const { 
      title, // : String!
      comment, // : String!
      rating, // : Int!
      date, // : Float!
      productId, // : ID!
    } = input;

    if (!products.find( ({ id }) => id === productId )) {
      return null;
    }

    const newReview = { 
      id: uuid.v4(), 
      title,
      comment,
      rating,
      date,
      productId
    }; 

    reviews.push(newReview);

    save('reviews', reviews);
    return newReview;
  },
}