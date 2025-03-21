import React, { useState, useEffect } from "react";
import { getProductData, getRelatedProductList } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";
import BackButton from "./BackButton";
import RelatedProducts from "./RelatedProducts";
import { useParams, Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { withCart } from "./withProvider";

function ViewDetails({ addToCart }) {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const params = useParams();
  const id = params.key;

  useEffect(() => {
    setCount(1);
    getRelatedProductList().then((response) => {
      setData(response.data);
    });

    getProductData(id)
      .then((response) => {
        setProduct(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const newData = data.filter((item) => product && item.category === product.category);

  if (loading) return <Loading />;
  if (!product) return <NotFound />;

  return (
    <div className="bg-gray-100 py-4">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto">
        <BackButton to="/" />
      </div>

      <div className="p-4 sm:max-w-6xl mx-auto bg-white shadow-md rounded-lg">
        {/* Product Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Previous Button */}
          {id > 1 && (
            <Link to={`/viewDetails/${id - 1}`} className="self-center">
              <MdOutlineArrowBack className="text-5xl p-2 hover:bg-rose-400 hover:text-white rounded-full transition duration-300" />
            </Link>
          )}

          {/* Product Image & Info */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              className="w-64 md:w-80 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
              src="https://cdn.pixabay.com/photo/2018/10/29/15/31/laptop-3781384_1280.jpg"
              alt="product_img"
            />

            <div className="flex flex-col space-y-4 text-center md:text-left">
              <h1 className="text-gray-500 text-sm">
                Home / {product.category} / {product.title}
              </h1>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <h3 className="text-xl font-semibold text-rose-600">Rs. {product.price}</h3>
              <p className="text-gray-700">{product.description}</p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <input
                  type="number"
                  onChange={(e) => setCount(+e.target.value)}
                  value={count}
                  className="border border-gray-400 w-12 h-10 text-center rounded-md"
                />
                <button
                  onClick={() => addToCart(id, count)}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300"
                >
                  ADD TO CART
                </button>
              </div>

              <h1 className="font-semibold text-lg">
                Category: <span className="text-rose-500">{product.category}</span>
              </h1>
            </div>
          </div>

          {/* Next Button */}
          {id < 100 && (
            <Link to={`/viewDetails/${+id + 1}`} className="self-center">
              <IoMdArrowForward className="text-5xl p-2 hover:bg-rose-400 hover:text-white rounded-full transition duration-300" />
            </Link>
          )}
        </div>

        {/* Product Description */}
        <div className="mt-6 border-t-2 pt-4">
          <h3 className="text-xl font-semibold text-rose-500 p-2 border-b-2 inline-block">
            Description
          </h3>
          <p className="py-4 text-gray-700">{product.description}</p>
        </div>

        {/* Related Products */}
        <div className="mt-6">
          <h2 className="font-bold text-2xl text-gray-800">Related Products ({product.category})</h2>
          <div className="mt-4 flex gap-4 flex-wrap">
            {newData.map((item) => (
              <RelatedProducts
                id={item.id}
                key={item.title}
                thumbnail={item.thumbnail}
                category={item.category}
                price={item.price}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withCart(ViewDetails);
