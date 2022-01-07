import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import fetchDetails from '../../Redux/Action/CategoryDetails';
import './CategoryDetails.css';
import Intro from '../Intro/Intro';

const CategoryDetails = () => {
  const data = useSelector((state) => state.CategoryDetailReducer);
  const category = useLocation();
  const pathname = category.pathname.split('/')[1];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(pathname));
  }, [category]);

  return (
    <>
      <Intro />
      <section className="categories-cont" id="details-cont">
        {data.map((category, i) => (
          <div className={`img-gal-wrapper-${i + 1} position-rel img-gal-details`} id="img-gal-details" key={category.id}>
            <figure className="img-wrapper" id="details-image-wrapper">
              <img className="img category-img" src={category.image} alt={category.category} />
            </figure>
            <div className="category-info-cont" id="details--info-cont">
              <h2 className="category-title">{category.category}</h2>
              <span className="category-image-count">
                {category.count}
                {' '}
                likes
              </span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CategoryDetails;
