// const resolveProcess = (product, filter) => {
//   switch(filter.process){
//     case 'avg':
//       const [property, key] = filter.field.split('.');
//       if (!product[property].length) return 0;

//       const addedUpValue = product[property].reduce((prev, curr) => { return (prev?.[key] ?? prev) + curr[key] });
//       return addedUpValue / (product[property].length);

//     default: 
//       return 0;
//   }
// }

const evalArithmeticFilter = (product, filter) => {
  // const productValue = filter.process || typeof product[filter.field] === 'object' ? resolveProcess(product, filter) : product[filter.field]
  const productValue = product[filter.field]
  const formula = `${productValue} ${filter.operator} ${filter.value}`
  return eval(formula);
}

exports.filterProducts = (products, filter) => {
  return products.filter( product => {

    let shouldBeReturned = true;
    let filters;

    if (!Array.isArray(filter)) {
      filters = filter ? filter : {}
    }

    for (key in filters) {
      let filterValue = filters[key];

      if ( typeof filterValue !== 'object' && key in product && product[key] !== filterValue ) shouldBeReturned = false;
      if ( typeof filterValue === 'object' ) {
        const filterField = filters[key].field;
        if (filterField in product && !evalArithmeticFilter(product, filters[key])) shouldBeReturned = false;
      } 
    }

    return shouldBeReturned;
  })
}