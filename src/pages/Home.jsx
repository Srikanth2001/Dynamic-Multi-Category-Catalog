import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const groupByCategory = (items) =>
  items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

export default function Home() {
  const categories = groupByCategory(data);

  return (
    <div className="container">
      <h1>🚀 Product Catalog</h1>
      {Object.keys(categories).map((cat) => (
        <div key={cat}>
          <h2 className="category-title">{cat}</h2>
          <div className="grid">
            {categories[cat].map((item) => (
              <Link
                key={item.itemname}
                to={`/item/${encodeURIComponent(item.itemname)}`}
                className="card"
              >
                <img src={item.image} alt={item.itemname} />
                <h3>{item.itemname}</h3>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
