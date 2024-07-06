import React from 'react';
import { BigCats } from "../components/BigCats"
import { originalData } from '../data/catsData';



export const LabTwo = () => {
    return (<div>
        <div>
            <BigCats data={originalData}/>
        </div>
    </div>
    )
}