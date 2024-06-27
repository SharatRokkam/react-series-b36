function Filter() {
  const listOfItem = [
    { name: "apple", type: "fruit" },
    { name: "Mango", type: "fruit" },
    { name: "Banana", type: "fruit" },
    { name: "Cabbage", type: "vegetable" },
    { name: "Carrot", type: "vegetable" },
  ];

  let fruits = listOfItem.filter((item) => item.type === "vegetable");

  return (
    <ol>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit.name}</li>
      ))}
    </ol>
  );
}

export default Filter;
