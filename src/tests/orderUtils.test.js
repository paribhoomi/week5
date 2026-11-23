
import {
    calculateOrderTotal,
    validateCustomer
} from "../utils/orderUtils";

describe("Order Utility Tests", () => {
    test("calculates order total correctly", () => {
        const cart = [
            { price: 100, quantity: 2 },
            { price: 50, quantity: 1 }
        ];

        expect(calculateOrderTotal(cart)).toBe(250);
    });

    test("returns zero for an empty cart", () => {
        expect(calculateOrderTotal([])).toBe(0);
    });

    test("validates correct customer information", () => {
        const customer = {
            name: "Rahul",
            email: "rahul@example.com",
            phone: "9876543210",
            address: "Bengaluru"
        };

        expect(validateCustomer(customer)).toEqual({});
    });

    test("rejects empty customer information", () => {
        const customer = {
            name: "",
            email: "",
            phone: "",
            address: ""
        };

        const errors = validateCustomer(customer);

        expect(errors.name).toBe("Name is required");
        expect(errors.email).toBe("Enter a valid email address");
        expect(errors.phone).toBe("Enter a valid 10-digit phone number");
        expect(errors.address).toBe("Address is required");
    });

    test("rejects invalid email", () => {
        const customer = {
            name: "Rahul",
            email: "invalid-email",
            phone: "9876543210",
            address: "Bengaluru"
        };

        expect(validateCustomer(customer).email)
            .toBe("Enter a valid email address");
    });
});
