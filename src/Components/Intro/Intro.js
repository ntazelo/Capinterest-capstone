import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchIntroImage from '../../Redux/Action/Intro';

import './Intro.css';

const Intro = () => {
  const data = useSelector((state) => state.IntroReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchIntroImage());
    }
  }, []);

  return (
    <section className="intro-cont">
      <div className="img-gal">
        {data.map((category, i) => (
          <figure key={category.id} className={`img-gal-wrapper--${i + 1}`}>
            <img className="img" src={category.image} alt={category.category} />
          </figure>
        ))}
      </div>
      <div className="intro-details">
        <div className="content-wrapper">
          <h1 className="title-cont">Capinterest</h1>
          <p className="category-count">6 Category</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
