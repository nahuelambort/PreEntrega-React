import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 
  const itemInCart = (id) => cart.find((product) => product.id === id);

  const addProduct = (item, qty = 1) => {

    const element = itemInCart(item.id);

    if (!element) return setCart([...cart, { ...item, qty }]);

    const newCart = cart.map((product) =>
      product.id === item.id ? { ...product, qty: product.qty + qty } : product
    );
    setCart(newCart);
  };

  const removeProduct = (id, qty = 1) => {
    const indexOfProductToRemove = cart.findIndex((product) => product.id === id);
  
    if (indexOfProductToRemove !== -1) {
      const productToRemove = cart[indexOfProductToRemove];
  
      if (productToRemove.qty > qty) {
        const newCart = [...cart];
        newCart[indexOfProductToRemove] = { ...productToRemove, qty: productToRemove.qty - qty };
        setCart(newCart);
      } else {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
      }
    }
  };



  const cleanCart = () => setCart([]);

  const getCartQty = useMemo(() => cart.reduce((acc, item) => acc + item.qty, 0),[cart]);

  const getTotalPrice = useMemo(() =>
    cart.reduce((acc, item) => acc + item.price * item.qty, 0),[cart]);


  const value = {
    cart,
    addProduct,
    removeProduct,
    cleanCart,
    getCartQty,
    getTotalPrice,
    itemInCart
  };

  return (
    <CartContext.Provider value={value} displayName="CartContext">
      {children}
    </CartContext.Provider>
  );
};