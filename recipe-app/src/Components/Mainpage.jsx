import React, { useState } from "react";
import axios from "axios";
import Mealcards from "./Mealcards";

const MainPage = () => {
  const [mealData, setMealData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  // with fetch and async await
  // const myFunc = async () => {
  //   const get = await fetch(
  //     `https://www.themealdb.com/api/json/v1/1/search.php?s=burger`
  //   );

  //   const json = await get.json();
  //   console.log(json.meals);
  // };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const myFunc = async () => {
    if (search == "") {
      setMsg("Please Enter Something");
    } else {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        setMealData(response.data.meals);
        setMsg("");
        console.log(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3 text-white">MyFav Recipe</h2>
        <div className="searchbox d-flex gap-2 justify-content-center m-4">
          <div className="input-group">
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              onChange={handleInput}
            />
          </div>
          <button className="btn btn-success" onClick={myFunc}>
            Search
          </button>
        </div>
        <h4 className="msg">{msg}</h4>
        <Mealcards detail={mealData} />
      </div>
    </>
  );
};

export default MainPage;
