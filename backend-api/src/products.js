const axios = require('axios');
const { SEARCH_API_URL } = require('./config/config');

const limit = 4;

const categoryListBuilder = (filters) => {
  const categoriesObject = filters.find((filter) => filter.id === 'category');
  const categories =
    categoriesObject &&
    categoriesObject.values &&
    categoriesObject.values.length > 0
      ? categoriesObject.values[0].path_from_root.map(
          (category) => category.name
        )
      : [];
  return categories;
};

const itemMapper = (item) => {
  const price = {
    currency: item.currency_id,
    amount: Math.floor(item.price),
    decimals: (item.price % 1).toFixed(2).split('.')[1],
  };
  return {
    id: item.id,
    title: item.title,
    price: price,
    picture: item?.thumbnail,
    condition: item?.condition,
    free_shipping: item?.shipping?.free_shipping,
  };
};

const fetchProductsList = async (req, res) => {
  try {
    const query = req.query.q;
    const request = await axios.get(
      `${SEARCH_API_URL}?q=${query}&limit=${limit}`
    );
    

    const { data } = request;
    if (data) {
      const catergoriesList = categoryListBuilder(data.filters);
      const result = {
        author: { name: 'Esteban', lastname: 'Ramirez' },
        categories: catergoriesList,
        items: data.results.map(itemMapper),
      };
      return res.status(200).send(result);
    } else {
      return res.status(404).send({ msg: `items not found` });
    }
  } catch (error) {
    console.error(
      'error fething products list,',
      error
    );
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  fetchProductsList: fetchProductsList,
};
