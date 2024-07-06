import React from 'react';

export const SingleCat = ({ catData }) => {
    return (
        <li>
            <h2>{catData.name}</h2>
            <p>{catData.latinName}</p>
        </li>
    );
};

