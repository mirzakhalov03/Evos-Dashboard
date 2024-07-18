import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import TableRes from '../../components/table/TableRes';
import { useOutletContext } from 'react-router-dom';


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery] = useOutletContext();

    

    
    
    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("/recipes");
                setRecipes(response.data.recipes); 
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <TableRes data={filteredRecipes} loading={loading} isMenuSection={false} />
        </>
    );
};

export default Recipes;
