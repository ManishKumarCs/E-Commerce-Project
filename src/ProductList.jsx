import React, { useState, useEffect, useCallback, useMemo } from "react";
import { getProductListHomePage } from "./api";
import ProductDetail from "./ProductDetail";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { Link, useSearchParams } from "react-router-dom";

function ProductList() {
  const [productsData, setProductsData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);
  let { sort, page, search } = params;
  sort = sort || "default";
  page = +page || 1;
  search = search || "";

  useEffect(() => {
    let sortBy;
    let sortType;
    if (sort === "price-low-high") sortBy = "price";
    if (sort === "price-high-low") {
      sortBy = "price";
      sortType = "desc";
    }
    if (sort === "title") sortBy = "title";

    getProductListHomePage({ sortBy, page, search, sortType }).then((response) => {
      setTotalPage(response.meta.last_page);
      setProductsData(response.data);
    });
  }, [sort, page, search]);

  const handleSearch = useCallback(
    (event) => {
      setSearchParams({ ...params, search: event.target.value, page: 1 }, { replace: false });
    },
    [params, setSearchParams]
  );

  const handleSort = useCallback(
    (event) => {
      setSearchParams({ ...params, sort: event.target.value }, { replace: false });
    },
    [params, setSearchParams]
  );

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 bg-white shadow-md rounded-lg py-10">
        
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-gray-500 text-sm">Home / Shop</h1>
          <h1 className="text-3xl font-bold text-rose-500">Shop</h1>
        </div>

        {/* Search & Sorting Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <SearchBar search={search} handleChange={handleSearch} />
          <Dropdown sort={sort} handleSort={handleSort} />
        </div>

        {/* Product List */}
        <div>
          {productsData.length > 0 ? (
            <ProductDetail products={productsData} page={page} />
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                alt="No products"
                className="w-40 h-40 opacity-50"
              />
              <h1 className="text-2xl text-gray-500 mt-4">No Products Found</h1>
            </div>
          )}
        </div>

        {/* Pagination Section */}
        {totalPage > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {[...Array(totalPage).keys()].map((pageNo) => (
              <Link
                key={pageNo}
                to={"?" + new URLSearchParams({ ...params, page: pageNo + 1 })}
                className={`px-4 py-2 text-sm font-semibold border rounded-md transition-all ${
                  page === pageNo + 1
                    ? "bg-rose-500 text-white border-rose-500 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {pageNo + 1}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
