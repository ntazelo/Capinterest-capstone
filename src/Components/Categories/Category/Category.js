import { useState } from 'react';

import './Category.css';

const Category = (props) => {
  const [category, setCategory] = useState('');
  const { Onfilter } = { ...props };
  const getCategoryHandler = (e) => {
    setCategory(e.target.value);
    Onfilter(e.target.value);
  };

  return (
    <section className="filter-cont">
      <p className="indic-sect">
        filter by category
      </p>
      <form className="form-control">
        <select name="category" className="category-input" value={category} onChange={getCategoryHandler} required>
          <option value="category">Category</option>
          <option value="buildings">buildings</option>
          <option value="computer">computer</option>
          <option value="music">music</option>
          <option value="food">food</option>
          <option value="animals">animals</option>
          <option value="backgrounds">backgrounds</option>
        </select>
      </form>
    </section>
  );
};

export default Category;
