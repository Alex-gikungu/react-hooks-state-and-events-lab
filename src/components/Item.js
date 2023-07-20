import { useState } from 'react';

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  const toggleInCart = () => {
    setInCart(prevInCart => !prevInCart);
  }

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );

}

export default Item;