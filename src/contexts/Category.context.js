import React, { useContext, useEffect, useState } from 'react';

const CategoryContext = React.createContext();

export function useCategory(){
    return useContext(CategoryContext);
}

export default function CategoryProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [categoryNames, setCategoryNames] = useState([]);
    
    
    const value = {
        categories,
        setCategories,
        categoryNames,
        setCategoryNames,
        // categoryState,
        // setCategoryState
    }
    
    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
}
