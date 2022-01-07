import fetchUrl, { GET_CATEGORY } from './ActionType';

const fetchAll = () => async (dispatch) => {
  const music = (await fetch(fetchUrl('music'))).json();
  const buildings = (await fetch(fetchUrl('buildings'))).json();
  const food = (await fetch(fetchUrl('food'))).json();
  const animals = (await fetch(fetchUrl('animals'))).json();
  const backgrounds = (await fetch(fetchUrl('backgrounds'))).json();
  const computer = (await fetch(fetchUrl('computer'))).json();
  const Categories = ['music', 'buildings', 'food', 'animals', 'backgrounds', 'computer'];

  const Cat = await Promise.all([music, buildings, food, animals, backgrounds, computer]);

  const payload1 = Cat.map((category, i) => ({
    category: Categories[i],
    count: category.hits.length,
    image: category.hits[0].largeImageURL,
    id: category.hits[0].id,
  }));

  const payload2 = Cat.map((category, i) => ({
    category: Categories[i],
    count: category.hits.length,
    image: category.hits[3].largeImageURL,
    id: category.hits[3].id,
  }));

  const payload3 = Cat.map((category, i) => ({
    category: Categories[i],
    count: category.hits.length,
    image: category.hits[5].largeImageURL,
    id: category.hits[5].id,
  }));

  const payload = [...payload2, ...payload1, ...payload3];

  dispatch({
    type: GET_CATEGORY,
    payload,
  });

  return [];
};

export default fetchAll;
