import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
  console.log(detail);
  return (
    <>
      <div className="meal d-flex justify-content-evenly gap-4 flex-wrap">
        {!detail
          ? ""
          : detail.map((currentItem) => {
              return (
                <div className="mealImage border flex-column justify-content-center align-items-center p-3">
                  <img
                    src={currentItem.strMealThumb}
                    width="200px"
                    height="100px"
                  />
                  <p>{currentItem.strMeal}</p>
                  <NavLink to={`${currentItem.idMeal}`}>
                    {" "}
                    <button>Recipe</button>
                  </NavLink>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Mealcards;
