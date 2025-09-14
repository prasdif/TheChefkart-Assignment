import "./index.css";
import { useState } from "react";

const dishes = [
  {
    id: 1,
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    name: "Tandoori Chicken",
    description:
      "Tandoori chicken is a dish made from chicken marinated in yogurt and spices, then roasted in a tandoor.",
    image:
      "https://res.cloudinary.com/dztmp3saa/image/upload/v1757783151/image_191_skcswk.png",
  },
  {
    id: 2,
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    name: "Dak Makhni",
    description:
      "Dal makhani is an Indian dish originating from the Punjab region. It is made with whole black lentils and kidney beans.",
    image:
      "https://res.cloudinary.com/dztmp3saa/image/upload/v1757783234/image_207_xsi7ci.png",
  },
  {
    id: 3,
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    name: "Cabbage",
    description:
      "Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green vegetable grown as an annual.",
    image:
      "https://res.cloudinary.com/dztmp3saa/image/upload/v1757783234/image_205_ioa8t6.png",
  },
];

const Dishes = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [selectedDishPopup, setSelectedDishPopup] = useState(null);

  const handleAdd = (dish) => {
    if (!selectedDishes.some((d) => d.id === dish.id)) {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const handleRemove = (dishId) => {
    setSelectedDishes(selectedDishes.filter((dish) => dish.id !== dishId));
  };

  const handleDishClick = (dish) => {
    setSelectedDishPopup(dish);
  };

  const closeDishPopup = () => {
    setSelectedDishPopup(null);
  };

  return (
    <div className="dishes-container">
      <h2 className="heading">
        North Indian
        <span className="up-arrow">▲</span>
      </h2>

      <div className="dishes-list">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="dish-card"
            onClick={() => handleDishClick(dish)}
          >
            <h3 className="dish-name">
              {dish.name}
              <img
                src={
                  dish.type === "VEG"
                    ? "https://res.cloudinary.com/dztmp3saa/image/upload/v1757830606/Frame_19479_2_clqrws.png"
                    : "https://res.cloudinary.com/dztmp3saa/image/upload/v1757830606/Frame_19479_3_lqeyax.png"
                }
                alt={dish.type}
                className="type-indicator"
                style={{ width: "12px", height: "12px", marginLeft: "4px" }}
              />
            </h3>
            <div className="content-row">
              <p className="dish-desc">
                {dish.description.length > 38
                  ? dish.description.slice(0, 38) + "... Read more"
                  : dish.description}
              </p>
              <img src={dish.image} alt={dish.name} className="dish-img" />
            </div>
            <div className="buttons-row">
              <button className="ingredient-btn" disabled>
                <img
                  src="https://res.cloudinary.com/dztmp3saa/image/upload/v1757831141/fi_15315413_rnemjq.png"
                  alt="Ingredient Icon"
                  className="ingredient-icon"
                />
                Ingredient
              </button>
              {!selectedDishes.some((d) => d.id === dish.id) ? (
                <button
                  className="add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAdd(dish);
                  }}
                >
                  Add +
                </button>
              ) : (
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(dish.id);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedDishPopup && (
        <div className="dish-popup">
          <div className="popup-content">
            <h3>{selectedDishPopup.name}</h3>
            <p>{selectedDishPopup.description}</p>
            <img
              src={selectedDishPopup.image}
              alt={selectedDishPopup.name}
              className="popup-dish-img"
            />
            <div className="popup-buttons">
              <button className="ingredient-btn" disabled>
                <img
                  src="https://res.cloudinary.com/dztmp3saa/image/upload/v1757831141/fi_15315413_rnemjq.png"
                  alt="Ingredient Icon"
                  className="ingredient-icon"
                />
                Ingredient
              </button>
              {!selectedDishes.some((d) => d.id === selectedDishPopup.id) ? (
                <button
                  className="add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAdd(selectedDishPopup);
                    closeDishPopup();
                  }}
                >
                  Add +
                </button>
              ) : (
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(selectedDishPopup.id);
                    closeDishPopup();
                  }}
                >
                  Remove
                </button>
              )}
            </div>
            <button className="close-btn" onClick={closeDishPopup}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="footer">
        <p>Total Dish Selected {selectedDishes.length}</p>
        <span className="arrow">›</span>
      </div>
    </div>
  );
};

export default Dishes; 
