
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
    const {
        cart,
        updateQuantity,
        removeFromCart,
        totalPrice
    } = useCart();

    if (cart.length === 0) {
        return (
            <section className="cart-page">
                <h2>Your Cart Is Empty</h2>
                <p>Add some delicious food to get started!</p>

                <Link to="/" className="checkout-button">
                    Browse Food
                </Link>
            </section>
        );
    }

    return (
        <section className="cart-page">
            <h2>Your Shopping Cart</h2>

            <div className="cart-list">
                {cart.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                    />
                ))}
            </div>

            <div className="cart-summary">
                <h3>Total: ₹{totalPrice}</h3>

                <Link
                    to="/checkout"
                    className="checkout-button"
                >
                    Proceed to Checkout
                </Link>
            </div>
        </section>
    );
}

export default Cart;
