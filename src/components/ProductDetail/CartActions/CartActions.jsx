import React from 'react';
// import { detailStore } from '../../../stores.js';
import SizeSelector from '../SizeSelector/SizeSelector.jsx';
import QuantitySelector from '../QuantitySelector/QuantitySelector.jsx';
import AddToCart from '../AddToCart/AddToCart.jsx';
import './CartActions.scss';

function CartActions() {
  // const selectedStyle = detailStore((state) => state.selectedStyle);
  // const selectedSize = detailStore((state) => state.selectedSize);
  // const setSelectedSize = detailStore((state) => state.setSelectedSize);

  return (
    <div className="cart-actions-container">
      <div className="pd-selectors-container">
        <SizeSelector />
        <QuantitySelector />
      </div>
      <AddToCart />
    </div>
  );
}

export default CartActions;