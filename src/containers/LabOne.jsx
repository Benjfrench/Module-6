import { Greetings, GreetingsHoC } from "../components/Greetings";
export const LabOne = () => {
  return (
    <div style={{ margin: "5px", width: "100%" }}>
      <LabelAndContent labelText={"Lab 1a & b"}>
        <Greetings name={"Ben"} />
      </LabelAndContent>
      <LabelAndContent labelText={"Lab 1c"}>
        <GreetingsHoC name={"Ben"}>
          <p>I want to welcome you to my website, blah blah</p>
        </GreetingsHoC>
      </LabelAndContent>
    </div>
  );
};
const LabelAndContent = ({ labelText, children }) => {
  const labelStyle = {
    textAlign: "left",
  };
  const labQuestionContainerStyle = {
    backgroundColor: "lightgrey",
    color: "black",
    padding: "5px",
  };
  return (
    <>
      <h6 style={labelStyle}>{labelText}</h6>
      <div style={labQuestionContainerStyle}>{children}</div>
    </>
  );
};