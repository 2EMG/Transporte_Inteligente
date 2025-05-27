import React from 'react';

const OrderSummary = ({ order, onRemoveItem, onPlaceOrder }) => {
  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tu Pedido</h2>
      {order.length === 0 ? (
        <p className="text-gray-600 text-center">Tu pedido está vacío.</p>
      ) : (
        <ul>
          {order.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b border-gray-200 py-3">
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                {item.selectedOption && (
                  <p className="text-sm text-gray-600">Opción: {item.selectedOption}</p>
                )}
              </div>
              <div className="flex items-center">
                <p className="font-bold text-gray-900 mr-4">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => onRemoveItem(index)}
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {order.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <p className="text-xl font-bold text-gray-800">Total:</p>
            <p className="text-xl font-bold text-gray-900">${total.toFixed(2)}</p>
          </div>
          <button
            onClick={onPlaceOrder}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
          >
            Realizar Pedido
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;