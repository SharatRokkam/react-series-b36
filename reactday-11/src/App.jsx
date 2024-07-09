import "./App.css";
// import CountControls from "./Components/CountControls";
// import Count from "./Components/Count";
// import { CounterProvider } from "./Components/CounterContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Layout from "./Routing/Layout";
import Dashboard from "./Routing/Dashboard";

const App = () => {
  return (
    <>
      {/* <CounterProvider>
        <Count />
        <CountControls />
      </CounterProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
