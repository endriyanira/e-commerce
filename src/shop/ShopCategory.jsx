import React from "react";

const ShopCategory = ({ filterItems, menuItems, selectedCategory }) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          className={`m-2 ${selectedCategory === "All" && "bg-warning"}`}
          onClick={() => filterItems("All")}
        >
          All
        </button>
        {menuItems.map((item, i) => (
          <button
            key={`categoryItemKey-${i.toString()}`}
            className={`m-2 ${selectedCategory === item && "bg-warning"}`}
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
