import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const CartEmpty = () => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <ShoppingCart className="mx-auto mb-4 text-gray-400" size={48} />
    <p className="text-gray-600">カートは空です</p>
  </div>
);