
import { Link, useLocation } from "react-router-dom";

function Success() {
    const { state } = useLocation();

    if (!state) {
        return (
            <section className="success-page">
                <h2>No order information found</h2>
                <Link to="/">Return Home</Link>
            </section>
        );
    }

    return (
        <section className="success-page">
            <div className="success-icon">✓</div>

            <h1>Order Placed Successfully!</h1>

            <p>
                Thank you, {state.customer.name}!
            </p>

            <p>
                Your order total is ₹{state.total}.
            </p>

            <p>
                Your food will be prepared shortly.
            </p>

            <Link to="/" className="checkout-button">
                Back to Home
            </Link>
        </section>
    );
}

export default Success;
