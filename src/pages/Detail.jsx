import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

export default function Detail() {
  const { name } = useParams();
  const decoded = decodeURIComponent(name);
  const item = data.find((i) => i.itemname === decoded);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div className="container">
      <Link to="/">⬅ Back</Link>
      <h1>{item.itemname}</h1>
      <p className="category-tag">{item.category}</p>

      <img src={item.image} className="detail-img" />

      <div className="props">
        {item.itemprops.map((p, i) => (
          <div key={i} className="prop-card">
            <span>{p.label}</span>
            <strong>{p.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
