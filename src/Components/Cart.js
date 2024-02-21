import React from 'react';

const Cart = ({ cart }) => {

  if (!cart) {
    return <div>No items in cart</div>;
  }

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          {item.title} - ${item.price}
        </div>
      ))}
      <p>Total Items: {cart.length}</p>
    </div>
  );
};

// const Cart = () => {

//     return (
//         <div>
//             <span>0</span> Items
//         </div>
//     );
// };

export default Cart;
