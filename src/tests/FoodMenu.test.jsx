
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FoodMenu from "../components/FoodMenu";
import { CartProvider } from "../context/CartContext";

describe("FoodMenu Integration Tests", () => {
    test("displays food products", () => {
        render(
            <CartProvider>
                <FoodMenu />
            </CartProvider>
        );

        expect(
            screen.getByText("Classic Cheese Pizza")
        ).toBeInTheDocument();
    });

    test("filters products by category", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <FoodMenu />
            </CartProvider>
        );

        await user.click(
            screen.getByRole("button", { name: "Pizza" })
        );

        expect(
            screen.getByText("Classic Cheese Pizza")
        ).toBeInTheDocument();

        expect(
            screen.queryByText("Veggie Burger")
        ).not.toBeInTheDocument();
    });

    test("searches for food by name", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <FoodMenu />
            </CartProvider>
        );

        await user.type(
            screen.getByRole("searchbox", {
                name: "Search food"
            }),
            "burger"
        );

        expect(
            screen.getByText("Veggie Burger")
        ).toBeInTheDocument();

        expect(
            screen.queryByText("Classic Cheese Pizza")
        ).not.toBeInTheDocument();
    });

    test("shows message when no food is found", async () => {
        const user = userEvent.setup();

        render(
            <CartProvider>
                <FoodMenu />
            </CartProvider>
        );

        await user.type(
            screen.getByRole("searchbox", {
                name: "Search food"
            }),
            "sushi"
        );

        expect(
            screen.getByRole("status")
        ).toHaveTextContent("No food items found.");
    });
});
