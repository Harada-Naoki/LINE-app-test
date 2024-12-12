import { MenuItem } from '../components/MenuItem';
import { Cart } from '../components/Cart';
import { useCart } from '../hooks/useCart';
import { menuItems } from '../data/menuItems';

const Home = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity, getTotalAmount } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">オンライン注文</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Cart
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              totalAmount={getTotalAmount()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

