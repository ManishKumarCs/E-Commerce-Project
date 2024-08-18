import React,{useState,useEffect} from 'react';
import {getProductData, getRelatedProductList} from './api';
import Loading from './Loading'
import NotFound from './NotFound'
import BackButton from './BackButton'
import RelatedProducts from './RelatedProducts'
import {useParams} from 'react-router-dom'
import { MdOutlineArrowBack } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'
import {withCart} from './withProvider'

function ViewDetails({addToCart}){
   const [data, setData] = useState([]);
   const [product,setProduct]=useState();
   const [loading,setLoading]=useState(true);
   const [count,setCount]=useState(1);
    function handleCountButton(){
         addToCart(id, count);
    }
    function handleCountValue(event){
      setCount(+event.target.value); 
    }
  const params = useParams();
  const id = params.key;
  useEffect(function(){
    setCount(1);
    getRelatedProductList().then(function(response){
     setData(response.data);
     });
    getProductData(id).then(function(response){
      setProduct(response);
      setLoading(false);
     }).catch(function(error){
      console.log(error);
      setLoading(false);
    })
  },[id]);
  const newData = data.filter(function(item){
      if(product)
      return item.category === product.category;
    })

  if(loading) {return <Loading></Loading>}
  if(!product) {return <NotFound></NotFound>}
  
  return(
    <>
        <div className="bg-gray-200 md:py-2">
          <div className="max-w-6xl mx-auto">
            <BackButton to="/"></BackButton>
          </div>
            <div className="p-2 sm:max-w-6xl sm:mx-auto bg-white mx-8">
              <div className="md:flex justify-between">
             { id>1 && <Link to={"/viewDetails/" + (id-1)} className="self-center">
                <MdOutlineArrowBack className="text-6xl my-1 items-center p-2 hover:bg-rose-400 hover:text-white rounded-full"/></Link>}
              <div className="flex flex-col items-center sm:flex-row justify-between m-4 md:mx-4">
             <img className="mx-2 sm:w-2/5 w-3/5 object-cover hover:scale-110" src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png" alt="product_img" />
           <div className="flex flex-col gap-5 items-center md:items-start sm:items-start ml-4">
             <h1 className="text-gray-400 font-sans">Home / {product.category} / {product.title}</h1>
             <h1 className="text-3xl font-bold mt-2 md:m-0">{product.title}</h1>
             <h3 className="font-bold text-xl md:text-2xl">Rs. {product.price}</h3>
             <p className="text-center md:text-left sm:text-left">
               {product.description}
             </p>
             <div>
               <input type="number" onChange={handleCountValue} value={count} className="border border-gray-500 w-12 h-8 p-2 rounded" />
               <button onClick={handleCountButton} className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-1 rounded-md font-semibold mx-2">ADD TO CART</button>
             </div>
           <h1 className="font-sans mb-2 text-xl">Category: <span className="text-rose-500">{product.category}</span></h1>
         </div>
        </div>
          {id<100 && <Link className="self-center" to={"/viewDetails/" + ((id*1) + 1)}><IoMdArrowForward className="text-6xl my-1 p-2 justifya-start hover:bg-rose-400 hover:text-white rounded-full"/></Link>}
        </div>
         <div className="border-t-2 p-2">
          <h3 className="text-xl border-2 shadow-xl rounded text-rose-500 p-2 inline-block mr-1">Description</h3>
            <p className="py-4">{product.description}</p>
            <h2 className="font-bold text-2xl my-2">Related Products ({product.category})</h2>
           <div className="max-w-80 flex gap-2 flex-wrap">
             {newData.map(function(item){
      return <RelatedProducts 
               id={item.id}
                key={item.title}
                thumbnail={item.thumbnail}
                category={item.category}
                price={item.price}
                title={item.title}
               />
            })}</div>
       </div>
      </div>
      </div>
  </>
  );
}
export default withCart(ViewDetails);