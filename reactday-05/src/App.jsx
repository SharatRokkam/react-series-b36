// import Random from "./Components/Random";
import "./App.css";
// import Filter from "./Components/Filter";
// import Reduce from "./Components/Reduce";

function App() {
  // array/object/array of object
  //   const languages = [];
  const languages = [
    "English",
    "Hindi",
    "Telugu",
    "Odiya",
    "Gujarati",
    "Marathi",
    "Tamil",
    "Punjabi",
  ];

  //if condition
  //   if (languages.length === 0) {
  //     return <h3>I am mute and cannot speak</h3>;
  //   }

  //ternary operator
  //   let emptyMessage =
  //     languages.length === 0 ? <h2>I am mute and cannot speak </h2> : null;

  return (
    <>
      <h2>My Favourite Fruit </h2>
      {/* logical operator  */}
      {languages.length === 0 && <p>I am mute and cannot speak </p>}
      <ol>
        {languages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      {/* <Filter />
      <Reduce></Reduce> */}
    </>
  );
}

export default App;
