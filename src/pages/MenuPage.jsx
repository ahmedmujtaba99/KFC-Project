import React, {  useState } from "react";
import Products from "../components/Products";
import CatButtons from "../components/CatButtons";
import Pagination from "../components/Pagination";
import { allItems } from "../data/ProjectData";


export default function Menu({ addToCart, showProduct }) {
  const [catSelect, setCatSelect] = useState(7);
  const [products, setProducts] = useState(allItems);

  const onCatSelect = (catId) => {
    setCatSelect(catId);
    const filterdItems = allItems.filter(
      (p) => p.categoryId === catId || p.allId === catId
    );
    setProducts(filterdItems);
  };

  return (
    <div className=" mb-5">
      <CatButtons onCatSelect={onCatSelect} catSelect={catSelect} />
      <Products
        addToCart={addToCart}
        items={products}
        showProduct={showProduct}
      />
      <Pagination />
    </div>
  );
}
