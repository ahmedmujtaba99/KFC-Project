import React from 'react'
import { catgories } from "../data/Catagories";
import './CatButtons.css'
export default function CatButtons({ onCatSelect, catSelect }) {
  return (
    <>
      {catgories.map((cat) => (
        <button
          type="button"
          className={`btn m-2
           ${cat.id === catSelect ? "btn-select" : "btn-all"}`}
          key={cat.id}
          // () => setCatSelect(cat.id)
          onClick={() => onCatSelect(cat.id)}
        >
          {cat.title}
        </button>
      ))}
    </>
  );
}
