import React from 'react';
import PropTypes from 'prop-types';
import { Minus, Plus, Trash2 } from 'lucide-react';

export const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => (
  <div className="flex items-center justify-between border-b pb-4">
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">¥{item.price.toLocaleString()}</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Minus size={20} />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Plus size={20} />
        </button>
      </div>
      <button
        onClick={() => onRemoveItem(item.id)}
        className="text-red-500 p-1 rounded-full hover:bg-red-50"
      >
        <Trash2 size={20} />
      </button>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};