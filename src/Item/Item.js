// src/Item/Item.js
export function Item({ imageUrl, title, text }) {
  return (
    <div className="item">
      <img src={imageUrl} alt={title} className="item-image" />
      <div className="item-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Item;
