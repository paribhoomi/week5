
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
    CartProvider,
    useCart
} from "../context/CartContext";

const food = {
    id: 1,
    name: "Pizza",
    price: 200
};

function CartTestComponent() {
    const {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        totalPrice
    } = useCart();

    return (
        <div>
            <button onClick={() => addToCart(food)}>
                Add Pizza
            </button>

            <button onClick={() => updateQuantity(1, 3)}>
                Update Quantity
            </button>

            <button onClick={() => removeFromCart(1)}>
                Remove Pizza
            </button>

            <p>Count: {cartCount}</p>
            <p>Total: {totalPrice}</p>
            <p>Products: {cart.length}</p>
        </div>
    );
}

describe("Cart Context", () => {
    test("adds products to cart", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <CartTestComponent />
            </CartProvider>
        );

        await user.click(
            screen.getByText("Add Pizza")
        );

        expect(screen.getByText("Count: 1"))
            .toBeInTheDocument();

        expect(screen.getByText("Total: 200"))
            .toBeInTheDocument();
    });

    test("increments existing product quantity", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <CartTestComponent />
            </CartProvider>
        );

        await user.click(screen.getByText("Add Pizza"));
        await user.click(screen.getByText("Update Quantity"));

        expect(screen.getByText("Count: 3"))
            .toBeInTheDocument();

        expect(screen.getByText("Total: 600"))
            .toBeInTheDocument();
    });

    test("removes products from cart", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <CartTestComponent />
            </CartProvider>
        );

        await user.click(screen.getByText("Add Pizza"));
        await user.click(screen.getByText("Remove Pizza"));

        expect(screen.getByText("Count: 0"))
            .toBeInTheDocument();

        expect(screen.getByText("Total: 0"))
            .toBeInTheDocument();
    });
});
