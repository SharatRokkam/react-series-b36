function Random() {
  let randomNum = Math.random() * 100;

  return <h2>Random Number : {Math.round(randomNum)}</h2>;
}

export default Random;
