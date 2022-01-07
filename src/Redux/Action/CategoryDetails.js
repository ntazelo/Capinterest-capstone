import fetchUrl, { CATEGORY_DETAILS } from './ActionType';

const fetchDetails = (categ) => async (dispatch) => {
  const data = await fetch(fetchUrl(categ));

  const obj = await data.json();
  const payload = obj.hits.map((category) => ({
    category: category.tags,
    count: category.likes,
    image: category.largeImageURL,
    id: category.id,
  }));

  dispatch({
    type: CATEGORY_DETAILS,
    payload,
  });
};

export default fetchDetails;
