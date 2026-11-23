
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
    validateCustomer
} from "../utils/orderUtils";

function Checkout() {
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCustomer((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateCustomer(customer);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        if (cart.length === 0) {
            navigate("/");
            return;
        }

        clearCart();
        navigate("/success", {
            state: {
                customer,
                total: totalPrice
            }
        });
    };

    if (cart.length === 0) {
        return (
            <section className="checkout-page">
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate("/")}>
                    Browse Food
                </button>
            </section>
        );
    }

    return (
        <section className="checkout-page">
            <h2>Checkout</h2>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                />
                {errors.name && <p role="alert">{errors.name}</p>}

                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={customer.email}
                    onChange={handleChange}
                />
                {errors.email && <p role="alert">{errors.email}</p>}

                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={customer.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p role="alert">{errors.phone}</p>}

                <label htmlFor="address">Delivery Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                />
                {errors.address && <p role="alert">{errors.address}</p>}

                <h3>Order Total: ₹{totalPrice}</h3>

                <button type="submit">
                    Place Order
                </button>
            </form>
        </section>
    );
}

export default Checkout;
