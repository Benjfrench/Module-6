import { useState } from "react";

// BUTTON COMPONENT INITIALISED
export const Button = ({ loading }) => {
  // STATES & VARIABLES
  const [count, setCount] = useState(0);

  // FUNCTIONS
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  //   PSUDOCODE
  function pullsInputInformationFromAElement() {
    var userCharacter = "pep";

    var listOfItems = [
      { name: "pencil", cost: 0 },
      { name: "pen", cost: 0 },
      { name: "paper", cost: 0 },
      { name: "card", cost: 0 },
      { name: "watch", cost: 0 },
    ];

    console.log(
      listOfItems.filter((item) => item.name.includes(userCharacter))
    );
    // - FUNCTION NEEDS TO TAKE VALUE FROM INPUT ELEMENT'

    // - I WANT TO THEN TAKE THE ARRAY OF VALUES FROM AN API

    // - I WANT TO FILTER THOSE VALUES USING THE VALUE FROM THE INPUT ELEMENT
  }

  pullsInputInformationFromAElement();

  // RETURN
  return (
    <div>
      {loading === true ? (
        <p>Loading....</p>
      ) : (
        <button onClick={handleClick}>count: {count}</button>
      )}
    </div>
  );
};
