
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartCount } = useCart();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                🍔 FoodieHub
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <a href="/#menu">Menu</a>

                <Link to="/cart" className="cart-link">
                    🛒 Cart
                    <span className="cart-count">
                        {cartCount}
                    </span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
