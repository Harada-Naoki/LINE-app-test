import React from 'react';
import PropTypes from 'prop-types';
import { CartEmpty } from './CartEmpty';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';

export const Cart = ({ items = [], onUpdateQuantity, onRemoveItem, totalAmount }) => {
  if (items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">注文内容</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
      <CartSummary totalAmount={totalAmount} />
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  totalAmount: PropTypes.number.isRequired,
};