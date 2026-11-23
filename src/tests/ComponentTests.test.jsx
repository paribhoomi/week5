
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import FoodCard from "../components/FoodCard";
import CategoryFilter from "../components/CategoryFilter";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Success from "../components/Success";

import {
    CartProvider,
    useCart
} from "../context/CartContext";

const food = {
    id: 1,
    name: "Pizza",
    price: 200,
    category: "Pizza",
    description: "Fresh cheese pizza",
    rating: 4.8,
    image: "/pizza.jpg"
};

function TestCart() {
    const { addToCart } = useCart();

    return (
        <button onClick={() => addToCart(food)}>
            Add Pizza
        </button>
    );
}

describe("Additional Component Tests", () => {

    test("Cart displays empty cart message", () => {
        render(
            <CartProvider>
                <MemoryRouter>
                    <Cart />
                </MemoryRouter>
            </CartProvider>
        );

        expect(
            screen.getByText("Your Cart Is Empty")
        ).toBeInTheDocument();
    });

    test("Cart displays products and total", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <MemoryRouter>
                    <TestCart />
                    <Cart />
                </MemoryRouter>
            </CartProvider>
        );

        await user.click(
            screen.getByText("Add Pizza")
        );

        expect(
            screen.getByText("Your Shopping Cart")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Total: ₹200")
        ).toBeInTheDocument();
    });

    test("CartItem increases quantity", async () => {
        const user = userEvent.setup();
        const updateQuantity = jest.fn();

        render(
            <CartItem
                item={{ ...food, quantity: 1 }}
                updateQuantity={updateQuantity}
                removeFromCart={jest.fn()}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: "Increase Pizza quantity"
            })
        );

        expect(updateQuantity)
            .toHaveBeenCalledWith(1, 2);
    });

    test("CartItem decreases quantity", async () => {
        const user = userEvent.setup();
        const updateQuantity = jest.fn();

        render(
            <CartItem
                item={{ ...food, quantity: 2 }}
                updateQuantity={updateQuantity}
                removeFromCart={jest.fn()}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: "Decrease Pizza quantity"
            })
        );

        expect(updateQuantity)
            .toHaveBeenCalledWith(1, 1);
    });

    test("CartItem removes product", async () => {
        const user = userEvent.setup();
        const removeFromCart = jest.fn();

        render(
            <CartItem
                item={{ ...food, quantity: 1 }}
                updateQuantity={jest.fn()}
                removeFromCart={removeFromCart}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: "Remove"
            })
        );

        expect(removeFromCart)
            .toHaveBeenCalledWith(1);
    });

    test("FoodCard displays product details", () => {
        render(
            <CartProvider>
                <FoodCard food={food} />
            </CartProvider>
        );

        expect(
            screen.getByRole("heading", { name: "Pizza" })
        ).toBeInTheDocument();

        expect(
            screen.getByText("Fresh cheese pizza")
        ).toBeInTheDocument();

        expect(
            screen.getByText("₹200")
        ).toBeInTheDocument();
    });

    test("FoodCard adds product to cart", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <FoodCard food={food} />
            </CartProvider>
        );

        await user.click(
            screen.getByRole("button", {
                name: "Add Pizza to cart"
            })
        );

        expect(
            screen.getByRole("button", {
                name: "Add Pizza to cart"
            })
        ).toBeInTheDocument();
    });

    test("CategoryFilter selects category", async () => {
        const user = userEvent.setup();
        const onSelect = jest.fn();

        render(
            <CategoryFilter
                categories={["All", "Pizza", "Burgers"]}
                selectedCategory="All"
                onSelect={onSelect}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: "Pizza"
            })
        );

        expect(onSelect)
            .toHaveBeenCalledWith("Pizza");
    });

    test("Navbar displays cart count", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <MemoryRouter>
                    <TestCart />
                    <Navbar />
                </MemoryRouter>
            </CartProvider>
        );

        await user.click(
            screen.getByText("Add Pizza")
        );

        expect(
            screen.getByText("1")
        ).toBeInTheDocument();
    });

    test("Hero displays main heading", () => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );

        expect(
            screen.getByText(/Delicious Food/)
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "Order Now"
            })
        ).toHaveAttribute("href", "#menu");
    });

    test("Success displays order information", () => {
        render(
            <MemoryRouter
                initialEntries={[{
                    pathname: "/success",
                    state: {
                        customer: {
                            name: "Rahul"
                        },
                        total: 200
                    }
                }]}
            >
                <Success />
            </MemoryRouter>
        );

        expect(
            screen.getByText(
                "Order Placed Successfully!"
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText("Thank you, Rahul!")
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                "Your order total is ₹200."
            )
        ).toBeInTheDocument();
    });

    test("Success handles missing order information", () => {
        render(
            <MemoryRouter initialEntries={["/success"]}>
                <Success />
            </MemoryRouter>
        );

        expect(
            screen.getByText(
                "No order information found"
            )
        ).toBeInTheDocument();
    });

});
