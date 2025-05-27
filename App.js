import React, { useState, useEffect } from 'react';
import MenuItemCard from './components/MenuItemCard';
import DrinkItemCard from './components/DrinkItemCard';
import OrderSummary from './components/OrderSummary';
import OrderTypeSelector from './components/OrderTypeSelector';
import { dailyMenu, dailyDrinks } from './mock/menu';

const App = () => {
  const [order, setOrder] = useState([]);
  const [orderType, setOrderType] = useState('local'); // 'local' or 'llevar'
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Simulate fetching background image
    const imageUrl = 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0g8uD7IByGbrS9nEWZQlfP5u0qJcMdT1UxIvR';
    setBackgroundImage(imageUrl);
  }, []);

  const handleAddItem = (item) => {
    setOrder([...order, item]);
  };

  const handleRemoveItem = (index) => {
    const newOrder = order.filter((_, i) => i !== index);
    setOrder(newOrder);
  };

  const handlePlaceOrder = () => {
    if (order.length === 0) {
      alert("Tu pedido está vacío.");
      return;
    }
    // Simulate sending order to kitchen
    console.log("Pedido enviado a cocina:", { order, orderType });
    alert(`Pedido (${orderType}) enviado con éxito!`);
    setOrder([]); // Clear order after placing
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto bg-white bg-opacity-90 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Menú del Día</h1>

        <OrderTypeSelector selectedType={orderType} onSelectType={setOrderType} />

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Platillos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dailyMenu.map(item => (
              <MenuItemCard key={item.id} item={item} onAddItem={handleAddItem} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Bebidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dailyDrinks.map(drink => (
              <DrinkItemCard key={drink.id} drink={drink} onAddItem={handleAddItem} />
            ))}
          </div>
        </div>

        <OrderSummary order={order} onRemoveItem={handleRemoveItem} onPlaceOrder={handlePlaceOrder} />
      </div>
    </div>
  );
};

export default App;

// DONE