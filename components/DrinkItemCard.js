import React from 'react';

const DrinkItemCard = ({ drink, onAddItem }) => {
  const handleAddItem = () => {
    onAddItem(drink);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transform transition-transform hover:scale-105">
      <img src={drink.image} alt={drink.name} className="w-24 h-24 object-cover rounded-xl mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{drink.name}</h3>
      <p className="text-gray-900 font-bold text-md mb-4">${drink.price.toFixed(2)}</p>
      <button
        onClick={handleAddItem}
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Agregar al pedido
      </button>
    </div>
  );
};

export default DrinkItemCard;