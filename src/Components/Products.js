import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }

      setLoading(false);
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      setCart([...cart, product]);
      alert(`Successfully added ${product.title} to cart`);
    }
  };

  const LoadingComponent = () => {
    return (
      <div>Loading.......</div>
    );
  };

  const ShowProducts = () => {
    return (
      <div className='container '>
        <div className="row justify-content-center align-items-center mt-4 my-5">
          {product && product.image && (
            <>
              <div className='col-md-6 mt-5 '>
                <img className=' mt-5' src={product.image} alt={product.title} height="350px" width="350px" />
              </div>
              <div className='col-md-6 '>
                <h1>{product.title}</h1>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating.rate}</p>
                <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {loading ? <LoadingComponent /> : <ShowProducts />}
    </div>
  );
};

export default Products;
