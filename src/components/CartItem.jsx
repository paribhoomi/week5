
function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="quantity-controls">
                    <button
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                        }
                    >
                        -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                        }
                    >
                        +
                    </button>
                </div>

                <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                >
                    Remove
                </button>
            </div>

            <strong>₹{item.price * item.quantity}</strong>
        </div>
    );
}

export default CartItem;
