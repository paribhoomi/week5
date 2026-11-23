
import {
    createContext,
    useContext,
    useState
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (food) => {
        setCart((previousCart) => {
            const existing = previousCart.find(
                (item) => item.id === food.id
            );

            if (existing) {
                return previousCart.map((item) =>
                    item.id === food.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...previousCart, { ...food, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((previousCart) =>
            previousCart.filter((item) => item.id !== id)
        );
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }

        setCart((previousCart) =>
            previousCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
}
