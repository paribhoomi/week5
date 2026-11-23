
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FoodCard from "../components/FoodCard";
import { CartProvider, useCart } from "../context/CartContext";

const food = {
    id: 1,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 249,
    rating: 4.8,
    description: "Delicious cheese pizza",
    image: "/pizza.jpg"
};

function CartCount() {
    const { cartCount } = useCart();

    return <p>Cart Items: {cartCount}</p>;
}

describe("FoodCard", () => {
    test("displays food information", () => {
        render(
            <CartProvider>
                <FoodCard food={food} />
            </CartProvider>
        );

        expect(
            screen.getByText("Cheese Pizza")
        ).toBeInTheDocument();

        expect(
            screen.getByText("₹249")
        ).toBeInTheDocument();
    });

    test("adds food to cart when button is clicked", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <FoodCard food={food} />
                <CartCount />
            </CartProvider>
        );

        await user.click(
            screen.getByRole("button", {
                name: "Add Cheese Pizza to cart"
            })
        );

        expect(
            screen.getByText("Cart Items: 1")
        ).toBeInTheDocument();
    });
});
