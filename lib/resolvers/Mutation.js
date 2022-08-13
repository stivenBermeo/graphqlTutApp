const uuid = require('uuid');
const { save } = require('./utils/save');

exports.Mutation = {

  addCategory: (_parent, { input }, { db }) =>  {
    const { name } = input;

    const newCategory = { name, id: uuid.v4() }; 
    db.categories.push(newCategory);

    save('categories', db.categories);
    return newCategory;
  },
  addProduct: (_parent, { input }, { db }) =>  {
    const { 
      name, // : String!
      description, // : String!
      quantity, // : Int!
      price, // : Float!
      onSale, // : Boolean!
      categoryId, // : ID!
      image, // : String 
    } = input;

    if (!db.categories.find( ({ id }) => id === categoryId )) {
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

    db.products.push(newProduct);

    save('products', db.products);
    return newProduct;
  },
  addReview: (_parent, { input }, { db }) =>  {
    const { 
      title, // : String!
      comment, // : String!
      rating, // : Int!
      date, // : Float!
      productId, // : ID!
    } = input;

    if (!db.products.find( ({ id }) => id === productId )) {
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

    db.reviews.push(newReview);

    save('reviews', db.reviews);
    return newReview;
  },

  removeCategory: (_parent, { id }, { db }) =>  {

    if (!db.categories.find(({ id: categoryId}) => categoryId === id)) {
      return false;
    };

    db.products = db.products.map((product) => {
      if (product.categoryId === id) {
        product.categoryId = null;
      }
      return product;
    });

    db.categories = db.categories.filter(({ id: categoryId}) => categoryId !== id);

    save('products', db.products);
    save('categories', db.categories);
    return true;
  },
  removeProduct: (_parent, { id }, { db }) => {
    if (!db.products.find(({ id: productId}) => productId === id)) {
      return false;
    };

    db.products = db.products.filter(({ id: productId}) => productId !== id);
    db.reviews = db.reviews.filter(({ productId}) => productId !== id);

    save('products', db.products);
    save('reviews', db.reviews);
    return true;
  }
}