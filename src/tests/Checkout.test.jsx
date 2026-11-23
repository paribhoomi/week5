
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import Checkout from "../components/Checkout";
import Success from "../components/Success";
import { CartProvider, useCart } from "../context/CartContext";

function AddPizza() {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() =>
                addToCart({
                    id: 1,
                    name: "Pizza",
                    price: 200
                })
            }
        >
            Add Pizza
        </button>
    );
}

function renderCheckout() {
    return render(
        <CartProvider>
            <MemoryRouter initialEntries={["/checkout"]}>
                <AddPizza />
                <Routes>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </MemoryRouter>
        </CartProvider>
    );
}

describe("Checkout Integration Tests", () => {
    test("shows validation errors for empty fields", async () => {
        const user = userEvent.setup();

        renderCheckout();

        await user.click(screen.getByText("Add Pizza"));
        await user.click(
            screen.getByRole("button", { name: "Place Order" })
        );

        expect(screen.getByText("Name is required"))
            .toBeInTheDocument();

        expect(screen.getByText("Enter a valid email address"))
            .toBeInTheDocument();
    });

    test("places an order with valid details", async () => {
        const user = userEvent.setup();

        renderCheckout();

        await user.click(screen.getByText("Add Pizza"));

        await user.type(screen.getByLabelText("Full Name"), "Rahul");
        await user.type(
            screen.getByLabelText("Email Address"),
            "rahul@example.com"
        );
        await user.type(
            screen.getByLabelText("Phone Number"),
            "9876543210"
        );
        await user.type(
            screen.getByLabelText("Delivery Address"),
            "Bengaluru"
        );

        await user.click(
            screen.getByRole("button", { name: "Place Order" })
        );

        expect(
            screen.getByText("Order Placed Successfully!")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Your order total is ₹200.")
        ).toBeInTheDocument();
    });
});
