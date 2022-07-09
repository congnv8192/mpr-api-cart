const products = require('../data/products.json');

let count = 0;

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

  // for mpr-2022: hit count for marking
  count++;

  return res.json(data);
}

function getCount(req, res) {
  return res.json({count});
}

module.exports = {
  all: all,
  getCount: getCount
}