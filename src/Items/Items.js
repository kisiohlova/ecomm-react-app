// src/Items/Items.js
import Item from "../Item/Item";
import "./items.css";

export function Items({ items }) {
  return (
    <>
      <div className="items-list">
        {items.map((item, index) => (
          <Item
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
      <div className="button-container">
        <button>View More</button>
      </div>
    </>
  );
}

export default Items;
