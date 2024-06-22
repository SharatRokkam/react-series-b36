import New from "./New";
import VComp from "./VComp";

import {  Section } from "./Header";
function App() {
  return (
    <>
      <New />
      <VComp />
      <h1>This is from App Component</h1>
      {/* <Header />
      <Footer /> */}
      <Section />
    </>
  );
}

export default App;
