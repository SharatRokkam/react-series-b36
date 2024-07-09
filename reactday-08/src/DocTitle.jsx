import React, { useEffect, useState } from "react";

const DocTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
    console.log('rendered');
  }, [count]);
  //dependency array runs every time count changes

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {" "}
        Click to change the title
      </button>
    </>
  );
};

export default DocTitle;
