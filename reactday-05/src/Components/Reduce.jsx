import React from "react";

const Reduce = () => {
  const cart = [
    { name: "apple", type: "fruit", quantity: 10 },
    { name: "Mango", type: "fruit", quantity: 13 },
    { name: "Banana", type: "fruit", quantity: 19 },
    { name: "Cabbage", type: "vegetable", quantity: 20 },
    { name: "Carrot", type: "vegetable", quantity: 10 },
  ];

  const total = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  return (
    <>
      <h2>Total quantity : {total}</h2>
    </>
  );
};

export default Reduce;
