import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  
  const getUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleClick = (productId) => {
    // Define what you want to happen when a product is clicked
    navigate(`/products/${productId}`);
    console.log("Product clicked:", productId);
    // You can navigate to another page or perform any other action here
  };


  return (
    <>
      <h1
        style={{
          marginLeft: "120px ",
          marginTop: "20px ",
          fontWeight: "bold",
        }}
      >
        LIST of product
      </h1>

      <div className="container-fluid mt-4" style={{ marginLeft: "100px" }}>
        <div className="row mx-5">
          {users?.map((product) => (
            <div key={product.id} className="col-5 mt-3">
              <div
                onClick={() => handleClick(product.id)}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                className="card"
              >
                <div
                  style={{
                    padding: 20,
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.5)",
                  }}
                  className="card-body"
                >
                  <div className="image">
                    <img
                      src={product.image}
                      className="new-img"
                      width="220"
                      height="200"
                      alt={product.image}
                    />
                    <div key={product.id}>
                      <h1>{product.title}</h1>
                    </div>

                    <div
                      className="description"
                      style={{
                        height: "100px",
                        overflow: "hidden",
                        marginTop: "20px",
                      }}
                    >
                      <span>{product.description}</span>
                    </div>
                  </div>

                  <div className="card-footer d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-start align-items-center flex-grow-1">
                      <span className="mr-2">
                        <span style={{ fontWeight: "500" }}>PRICE:</span>{" "}
                        {product.price}
                      </span>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <p className="mb-0">
                        <span style={{ fontWeight: "500" }}>RATE:</span> 4.4
                      </p>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      marginTop: "5px",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Data;
