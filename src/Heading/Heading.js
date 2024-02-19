import "./heading.css";

export function Heading() {
  return (
    <div className="heading-container">
      <img src="/mint-marigold.png" alt="flower" className="heading-image" />
      <div className="heading-content">
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          aspernatur odit! Recusandae voluptates numquam distinctio nam
          reiciendis. Aliquam, mollitia tempore esse quo, facere veritatis velit
          expedita asperiores id veniam saepe?
        </p>
      </div>
    </div>
  );
}
