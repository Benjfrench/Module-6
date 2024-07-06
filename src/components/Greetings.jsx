export const Greetings = ({ name }) => {
  // STATE AND VAR
  var welcomeString = `Hello ${name ? name : "World"}`;

  // FUNCTIONS

  // RETURN
  return (
    <div>
      <h1>{welcomeString}</h1>
    </div>
  );
};

export const GreetingsHoC = ({ name, children }) => {
  // STATE AND VAR
  var welcomeString = `My name is ${name}`;

  // FUNCTIONS

  // RETURN
  return (
    <div>
      <h1>{welcomeString}</h1>
      {children}
    </div>
  );
};
