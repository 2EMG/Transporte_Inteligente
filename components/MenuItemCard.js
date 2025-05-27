import React, { useState } from 'react';

const MenuItemCard = ({ item, onAddItem }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAddItem = () => {
    onAddItem({ ...item, selectedOption });
    setSelectedOption(''); // Reset option after adding
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transform transition-transform hover:scale-105">
      <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-xl mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
      <p className="text-gray-600 text-center mb-3">{item.description}</p>
      <p className="text-gray-900 font-bold text-lg mb-4">${item.price.toFixed(2)}</p>

      {item.options && item.options.length > 0 && (
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black transition"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Selecciona una opción</option>
          {item.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      <button
        onClick={handleAddItem}
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Agregar al pedido
      </button>
    </div>
  );
};

export default MenuItemCard;