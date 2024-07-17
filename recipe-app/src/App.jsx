import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./Components/Mainpage";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import MealInfo from "./Components/MealInfo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/:mealid" element={<MealInfo />}></Route>
      </Routes>
    </>
  );
};

export default App;
