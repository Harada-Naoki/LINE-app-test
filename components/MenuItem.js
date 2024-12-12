import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'lucide-react';

export const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 mt-1">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">¥{item.price.toLocaleString()}</span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.oneOf(['main', 'appetizer', 'dessert', 'drink']).isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};