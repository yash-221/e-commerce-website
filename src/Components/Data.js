import React, { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import { NavLink } from 'react-router-dom';


const Data = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const responseData = await response.json();

      setData(responseData);
      setFilter(responseData);
      setLoading(false);
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
     console.log('Adding to cart:', product);
    alert(`Successfully added ${product.title} to cart`);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="row justify-content-center">
          {filter.map((product) => {
            return (
              <div className="col-md-3 mt-4" key={product.id}>
                <div className="card h-100 text-center p-4">
                  {product && product.image && (
                    <img src={product.image} className="card-img-top" alt={product.title} height="200px" />
                  )}
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <div>
                      <button
                        style={{ marginRight: '10px', backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                        onClick={() => handleAddToCart(product)}>Add to Cart</button>
                      <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="buttons  pb-5">
              <button className='btn btn-outline-dark my-5 mx-2' onClick={() => setFilter(data)}>All</button>
              <button className='btn btn-outline-dark my-5 mx-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
              <button className='btn btn-outline-dark my-5 mx-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
              <button className='btn btn-outline-dark my-5 mx-2' onClick={() => filterProduct("jewelery")}>Jewelry</button>
              <button className='btn btn-outline-dark my-5 mx-2' onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Data;
