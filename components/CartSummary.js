import React from 'react';
import PropTypes from 'prop-types';

export const CartSummary = ({ totalAmount }) => (
  <div className="mt-6 pt-4 border-t">
    <div className="flex justify-between items-center mb-4">
      <span className="font-semibold">合計</span>
      <span className="text-xl font-bold">¥{totalAmount.toLocaleString()}</span>
    </div>
    <button
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      onClick={() => {
        // TODO: LIFFの決済処理を実装
        alert('注文を確定しました！');
      }}
    >
      注文を確定する
    </button>
  </div>
);

CartSummary.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};