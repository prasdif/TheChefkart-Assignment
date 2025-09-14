import { useState } from "react";
import "./index.css";

const categories = ["Starter", "Main Course", "Desert", "Sides"];

function DishFilter() {
  const [activeCategory, setActiveCategory] = useState("Main Course");

  return (
    <div className="dish-filter-container">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search dish for your party..." 
        />
        <button className="search-btn">
          <img
            src="https://res.cloudinary.com/dztmp3saa/image/upload/v1757743531/fi_711319_hpw36z.png"
            alt="search-icon"
            className="search-icon"
          />
        </button>
      </div>

      {/* Category Buttons */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} 0
          </button>
        ))}
      </div>
    </div>
  );
}  

export default DishFilter;              