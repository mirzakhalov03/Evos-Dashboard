export const initialState = {
    foodRecipe: JSON.parse(localStorage.getItem("foodRecipe")) || [],
    addedRecipeIds: JSON.parse(localStorage.getItem("addedRecipeIds")) || []
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_RECIPE":
            const updatedFoodRecipe = [...state.foodRecipe, action.user];
            const updatedAddedRecipeIds = [...state.addedRecipeIds, action.user.id];
            localStorage.setItem("foodRecipe", JSON.stringify(updatedFoodRecipe));
            localStorage.setItem("addedRecipeIds", JSON.stringify(updatedAddedRecipeIds));
            return {
                ...state,
                foodRecipe: updatedFoodRecipe,
                addedRecipeIds: updatedAddedRecipeIds
            };
        default:
            return state;
    }
};

export default reducer;







