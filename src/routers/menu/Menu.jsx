import React from 'react';
import TableRes from '../../components/table/TableRes';
import { useSelector } from 'react-redux';

const Menu = () => {
    const foodRecipe= useSelector(state => state.foodRecipe);

    console.log("Menu data from Redux:", foodRecipe[0]); 


    return (
        <>
         <TableRes data={foodRecipe} loading={false} key={foodRecipe.id} isMenuSection={true} />
        </>
        
    );
}

export default Menu;






