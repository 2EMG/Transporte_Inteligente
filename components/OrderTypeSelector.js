import React from 'react';

const OrderTypeSelector = ({ selectedType, onSelectType }) => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={() => onSelectType('local')}
        className={`px-6 py-3 rounded-lg text-lg font-semibold transition-colors ${
          selectedType === 'local'
            ? 'bg-black text-white shadow-md'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        En Local
      </button>
      <button
        onClick={() => onSelectType('llevar')}
        className={`px-6 py-3 rounded-lg text-lg font-semibold transition-colors ${
          selectedType === 'llevar'
            ? 'bg-black text-white shadow-md'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Para Llevar
      </button>
    </div>
  );
};

export default OrderTypeSelector;