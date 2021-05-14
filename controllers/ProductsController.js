const products = require('../data/products.json');

/**
 * GET /products
 * return an array of all products by  (format: {id, : definition, ...})
 * @param category (optional) filter products by category
 * e.g. /products?category=watches
 */
function all(req, res) {
  let data = products;

  // console.log(products);

  // filter by category
  const category = req.query.category;
  if (category) {
    data = data.filter((product) => {
      return product.category == category
    });
  }

  // for mpr-2021: remove category
  data = data.map(item => {
    delete item.category;

    return item;
  });

  return res.json(data);
}

module.exports = {
  all: all
}