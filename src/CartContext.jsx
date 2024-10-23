import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Atualiza o localStorage sempre que cartItems for alterado
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Adiciona produto ao carrinho ou incrementa a quantidade se o produto já existir com o mesmo tamanho
  const addToCart = (product, quantSelecionada = 1) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(
        (item) => item.nome === product.nome && item.tamanhoEscolhido === product.tamanhoEscolhido
      );
      if (existingProductIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + quantSelecionada }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: quantSelecionada }];
    });
  };

  // Remove um produto do carrinho
  const removeFromCart = (productNome, productTamanho) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.nome === productNome && item.tamanhoEscolhido === productTamanho))
    );
  };

  // Atualiza a quantidade de um item no carrinho
  const updateQuantity = (index, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calcula o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const preco = parseFloat(item.preco);
      return total + preco * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
