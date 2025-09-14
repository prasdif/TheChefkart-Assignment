import "./index.css";

const Ingredient = ({ dish, onClose }) => {
  return (
    <div className="ingredient-modal">
      <div className="ingredient-content">
        <h3>Ingredients for {dish.name}</h3>
        <ul>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Ingredient;