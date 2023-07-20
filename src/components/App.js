import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  }
  
  const theme = darkMode ? 'dark' : 'light';

  return (
    <div className={`App ${theme}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button> 
      </header>

      <ShoppingList items={itemData} />
    </div>
  );

}

export default App;