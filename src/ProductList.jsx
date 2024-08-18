import React,{useState, useEffect} from 'react';
import {getProductListHomePage} from './api';
import ProductDetail from './ProductDetail';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import {Link, useSearchParams} from 'react-router-dom';
import {toQuery} from 'lodash';

function ProductList(){
  const [productsData, setProductsData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let {sort, page, search} = params;
  sort = sort || 'default';
  page = +page || 1;
  search = search || '';

    useEffect(function(){
      let sortBy;
      let sortType;
      if(sort=='price-low-high')  sortBy='price';
      if(sort=='price-high-low'){
        sortBy= 'price';
        sortType='desc';
      }
      if(sort=='title')  sortBy= 'title';

      getProductListHomePage({sortBy, page, search, sortType}).then(function(response){
        setTotalPage(response.meta.last_page);
       setProductsData(response.data);
       });
    },[sort, page, search])

    function handleSearch(event){
      setSearchParams({...params, search: event.target.value, page: 1},
                      {replace: false});
    }
    function handleSort(event){
      setSearchParams({...params, sort: event.target.value},
             {replace: false});
    }
    return (
      <>
        <div className="bg-gray-200 md:py-8 min-h-screen">
          <div className="md:p-16 p-8 max-w-6xl mx-auto bg-white">
              <h1 className="font-light font-sans mb-2">Home / Shop</h1>
              <h1 className="text-2xl text-rose-400 font-sans mb-4">Shop</h1>
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              <SearchBar search={search} handleChange={handleSearch} sort={sort} handleSort={handleSort}></SearchBar>
              <Dropdown sort={sort} handleSort={handleSort}></Dropdown>
            </div>
        <div>
          <ProductDetail products={productsData} page={page}></ProductDetail>
          {(productsData.length==0) && <h1 className="text-3xl">No Products Found of Search item</h1>}
              </div>
            <div className="mt-12 flex gap-4">
              {[...Array(totalPage).keys()].map((pageNo) =>(
                <Link 
                  key={pageNo} 
                  to={"?" + new URLSearchParams({...params, page: pageNo+1})} 
                  className={
                  "p-4 border rounded focus:border-none " + (page === pageNo+1 ? "bg-rose-400 " : "bg-white")
                  }>{pageNo+1}</Link>
              ))}
            </div>
            </div>
          </div>
      </>
    );
  }
export default ProductList;