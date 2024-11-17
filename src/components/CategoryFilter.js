import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  function handleClick(cat) {
    setSelectedCategory(cat);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        /* render <button> elements for each category here */
        categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => handleClick(category)}
              className={category === selectedCategory ? "selected" : ""}
            >
              {category}
            </button>
          );
        })
      }
    </div>
  );
}

export default CategoryFilter;