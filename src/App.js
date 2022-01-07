import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:name" element={<CategoryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
