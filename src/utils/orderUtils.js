export function calculateOrderTotal(cart) {
    return cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );
}

export function validateCustomer(customer) {
    const errors = {};

    if (!customer.name.trim()) {
        errors.name = "Name is required";
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(customer.email.trim())) {
        errors.email =
            "Enter a valid email address";
    }

    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(customer.phone.trim())) {
        errors.phone =
            "Enter a valid 10-digit phone number";
    }

    if (!customer.address.trim()) {
        errors.address = "Address is required";
    }

    return errors;
}