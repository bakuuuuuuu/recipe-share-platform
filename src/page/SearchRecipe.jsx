import React, { useState, useEffect } from 'react';

const SearchRecipe = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        if (query !== '') {
            const filteredResults = recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults);
        } else {
            setSearchResults([]);
        }
    }, [query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipes by title..."
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />
            <ul>
                {searchResults.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.content.substring(0, 100)}...</p>
                        {item.imageUrl && <img src={item.imageUrl} alt="Recipe" style={{ width: '100%', height: 'auto' }} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchRecipe;
