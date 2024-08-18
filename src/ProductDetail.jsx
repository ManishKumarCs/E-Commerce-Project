import React from 'react';
import Product from './Product';
function ProductDetail({products}){
  
  return(
    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 items-center gap-4 space-y-2 md:space-y-0 justify-center ">
      {products.map(function(item){
        return <Product 
                 id={item.id}
                 key={item.title}
                 thumbnail={item.thumbnail}
                 category={item.category}
                 price={item.price}
                 title={item.title}
                 />
              })
            } 
      </div>
  );
}
export default ProductDetail;