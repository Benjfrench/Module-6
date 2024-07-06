import { useState } from "react";
import { BigCats } from "../components/BigCats";
import { originalData } from "../data/catsData";
export const LabFive = () => {
  // state / var

const [catData, setCatData] = useState(originalData)

  // function
const addCatToList = (newCatData) => {
console.log(newCatData);
}
  // return
  return <div><AddCatsForm data={catData} addCatToList={addCatToList}/>;
  <div style={{marginTop: "20px"}}><BigCats data={originalData}/></div>
  </div>
};

const AddCatsForm = ({data}) => {
  // state / var
    const [catName, setCatName] = useState("");
    const [catLatinName, setCatLatinName] = useState("");
    const [catImageUrl, setCatImageUrl] = useState("");
  // function
  const submitHandler = () => {
    console.log(catName,
        catLatinName,
        catImageUrl)
    // if(addCatToList)
  }
  // return  
  return (
    <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
      <InputField
        label="Name"
        value={catName}
        callBackFunction={(name) => setCatName(name)}
      />
      <InputField
        label="Latin Name"
        value={catLatinName}
        callBackFunction={(name) => setCatLatinName(name)}
      />
      <InputField
        label="image url"
        value={catImageUrl}
        callBackFunction={() => setCatImageUrl(url)}
      />
      <button onClick={submitHandler}>Add Cat</button>

    </div>
  );
};

const InputField = ({ value, label, callBackFunction }) => {
//   const [textValue, setTextValue] = useState("");

const onChangeHandler = (event) => {
    // setTextValue(event.target.value)
if(callBackFunction){
    callBackFunction(event.target.value)
}
};

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChangeHandler} />
    </div>
  );
};