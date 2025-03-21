import React from "react";
import Product from "./Product";

function ProductDetail({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
      {products.map((item) => (
        <Product
          id={item.id}
          key={item.id} // Use ID instead of title for uniqueness
          thumbnail={item.thumbnail}
          category={item.category}
          price={item.price}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default ProductDetail;
