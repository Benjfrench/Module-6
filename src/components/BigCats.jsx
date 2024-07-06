import React, { useState, useEffect } from "react";
import { SingleCat } from "./SingleCat";

const BigCats = ({data}) => {
    const [catsData, setCatsData] = useState(data);
    const [filteredCatsData, setFilteredCatsData] = useState(catsData);

    useEffect(() => {
        if (data.length !== catsData.length) {
          setCatsData(data);
        }
      }, [data]);

    const catListhandler = () => {
        return filteredCatsData.map((cat) => <SingleCat key={cat.id} catData={cat} />);
    };

    const alphabetise = () => {
        const sortedCats = [...filteredCatsData].sort((a, b) => a.name.localeCompare(b.name));
        setFilteredCatsData(sortedCats);
    };

    const reverse = () => {
        const sortedCats = [...filteredCatsData].sort((a, b) => b.name.localeCompare(a.name));
        setFilteredCatsData(sortedCats);
    };

    const filterPanthera = () => {
        const pantheraCats = catsData.filter(cat => cat.latinName.startsWith('Panthera'));
        setFilteredCatsData(pantheraCats);
    };

    const resetList = () => {
        setFilteredCatsData(catsData);
    };

    return (
        <div>
            <button onClick={alphabetise}>Alphabetise</button>
            <button onClick={reverse}>Reverse Alphabetise</button>
            <button onClick={filterPanthera}>Filter Panthera</button>
            <button onClick={resetList}>Reset List</button>
            <ul>
                {catListhandler()}
            </ul>
        </div>
    );
};

// Assuming SingleCat component is defined in the same way as before
// const SingleCat = ({ catData }) => {
//     return (
//         <>
//             <li>
//                 <div>
//                     <h2>{catData.name}</h2>
//                     <p>{catData.latinName}</p>
//                 </div>
//             </li>
//         </>
//     );
// };

export { BigCats };
