import './App.css';
import DishCard from './components/DishCard';
import DishFilter from './components/DishFilter'; 
import DishList from './components/DishList'

const App = () => {
  return (
    <>
      <DishFilter /> 
      <DishCard /> 
      <DishList/>
    </>
  );
};

export default App;
