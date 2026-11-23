WEEK 5 – REACTJS TESTING AND DEBUGGING REPORT

Project Title: FoodieHub – Online Food Ordering Application
Technology Stack: ReactJS, JavaScript, Jest, React Testing Library, React Router

1. Introduction

The objective of this Week 5 assignment is to improve the reliability, functionality, and maintainability of the FoodieHub ReactJS application through comprehensive testing and debugging practices.

FoodieHub is an online food ordering application that allows users to browse food products, search for food, filter products by category, add products to a shopping cart, modify quantities, and place orders through a checkout process.

Jest and React Testing Library were used to implement unit testing and integration testing.

2. Objectives of Testing

The main objectives were:

Verify that individual React components render correctly.
Test shopping cart functionality.
Validate customer information during checkout.
Ensure food searching and category filtering work correctly.
Verify cart quantity and order total calculations.
Test interactions between React components.
Identify potential bugs and resolve issues through debugging.
Improve application reliability and maintainability.
3. Testing Tools and Technologies


Tool	Purpose
Jest	JavaScript testing framework
React Testing Library	Testing React components
@testing-library/jest-dom	Additional DOM assertions
@testing-library/user-event	Simulating user interactions
React Router	Testing application navigation
jsdom	Simulating a browser environment
Babel Jest	Transforming JavaScript and JSX
VS Code	Development and debugging
Browser Developer Tools	Inspecting application errors
Why Jest?

Jest provides a testing environment for JavaScript applications. It supports test cases, assertions, mocking, and code coverage reports.

Why React Testing Library?

React Testing Library allows developers to test components from the user's perspective. It helps verify that buttons, forms, navigation links, and other UI elements behave as expected.

4. Testing Strategy

The application was tested using three main approaches.

4.1 Unit Testing

Unit testing focuses on individual components and functions independently.

The following areas were tested:

CartContext
CartItem
FoodCard
CategoryFilter
Order utility functions
Customer validation
Order total calculation
4.2 Integration Testing

Integration testing verifies that multiple components work together correctly.

The following workflows were tested:

FoodMenu with FoodCard.
FoodCard with CartContext.
Cart with CartItem.
Checkout with CartContext.
Checkout with Success.
Navbar with CartContext.
4.3 Debugging

Debugging was performed by analyzing application behavior and examining test failures.

The following techniques were used:

Jest test output analysis.
Browser console inspection.
React Developer Tools.
VS Code breakpoints.
Temporary console logging.
DOM inspection through React Testing Library.
5. Test Cases and Scenarios

5.1 CartContext Testing

The CartContext manages shopping cart operations.


Test Case	Expected Result
Add a product	Product is added to cart
Add an existing product	Quantity increases
Update product quantity	Quantity and total are updated
Remove a product	Product disappears
Calculate cart count	Correct total quantity is displayed
Calculate cart total	Correct price is displayed
Clear cart	All products are removed
5.2 FoodMenu Testing


Test Case	Expected Result
Load food menu	Food products are displayed
Select Pizza category	Only pizza products are displayed
Search for Burger	Matching burgers are displayed
Search for nonexistent food	No food items found message appears
Change category	Product list updates
Search using lowercase text	Matching products are found
5.3 Checkout Testing


Test Case	Expected Result
Submit empty form	Validation errors appear
Enter valid customer name	Name is accepted
Enter invalid email	Email validation error appears
Enter invalid phone number	Phone validation error appears
Leave address empty	Address validation error appears
Submit valid information	Order is successfully placed
Open checkout with empty cart	Empty-cart message appears
Complete checkout	Cart is cleared and success page opens
5.4 Cart Component Testing


Test Case	Expected Result
Open empty cart	Empty cart message appears
Open populated cart	Products are displayed
Increase quantity	Quantity increases
Decrease quantity	Quantity decreases
Remove product	Product is removed
View total	Correct total price is displayed
Proceed to checkout	Checkout navigation link is displayed
5.5 FoodCard Testing


Test Case	Expected Result
Display food card	Product information appears
Display product name	Correct name is displayed
Display price	Correct price is displayed
Click Add to Cart	Product is added to cart
Display rating	Product rating is visible
5.6 CategoryFilter Testing


Test Case	Expected Result
Display categories	All categories are displayed
Select Pizza	Pizza category is selected
Select Burgers	Burger category is selected
Select All	All products are displayed
Check active category	Selected button has active state
5.7 Navbar Testing


Test Case	Expected Result
Render navigation	Navigation links appear
Display logo	FoodieHub logo is visible
Display cart count	Correct item count appears
Navigate to cart	Cart page is accessible
Navigate to home	Home page is accessible
5.8 Success Component Testing


Test Case	Expected Result
Load success page	Success message appears
Display customer name	Correct name is displayed
Display order total	Correct order amount appears
Missing order information	Fallback message appears
Click Back to Home	Home navigation is available
5.9 Order Utility Testing


Test Case	Expected Result
Calculate multiple product totals	Correct sum is returned
Calculate empty cart	Returns zero
Validate correct customer data	Empty error object is returned
Validate empty information	Required field errors appear
Validate invalid email	Email error appears
Validate invalid phone	Phone error appears
6. Test Execution and Results

Tests were implemented using Jest and React Testing Library.

The following commands were used:

Run all tests


bash
npm test
Run tests in watch mode


bash
npm run test:watch
Generate coverage report


bash
npm run test:coverage
Overall Testing Results


Metric	Result
Total test suites	6
Passed test suites	6
Failed test suites	0
Total test cases	28
Passed test cases	28
Failed test cases	0
Statement coverage	91.17%
Branch coverage	84.09%
Function coverage	92.68%
Line coverage	90.90%
The application achieved 91.17% statement coverage, 84.09% branch coverage, 92.68% function coverage, and 90.90% line coverage.

These results indicate that most of the application's code was executed during testing. The remaining uncovered lines represent areas where additional test cases could further improve coverage.

7. Bug Identification and Debugging

Testing helps identify errors that may not be noticeable during normal application usage.

The following potential issues and debugging scenarios were examined.

Bug 1: Incorrect Cart Quantity

Problem: A product quantity could potentially become zero or negative when decreased.

Debugging: The updateQuantity function was inspected and tested.

Solution: A condition was implemented to remove the product when its quantity becomes zero or less.

Bug 2: Invalid Customer Information

Problem: Incorrect customer information could affect order processing.

Debugging: Different customer inputs were tested using Jest.

Solution: The validateCustomer function checks the name, email, phone number, and delivery address before processing an order.

Bug 3: Incorrect Order Total

Problem: Incorrect cart calculations could display an incorrect order amount.

Debugging: Multiple product quantities and prices were tested.

Solution: The reduce() function calculates the total price using product price multiplied by quantity.

Bug 4: Empty Cart Checkout

Problem: A user might attempt to access checkout without adding products.

Debugging: The Checkout component was tested with an empty cart.

Solution: The component displays an empty-cart message and provides a button to browse food.

Bug 5: Missing Order Information

Problem: The success page might be opened without order information.

Debugging: The Success component was rendered without navigation state.

Solution: A fallback message is displayed when order information is unavailable.

8. Code Quality and Best Practices

The following practices were followed:

Components were kept modular and reusable.
React Context was used for shared cart state.
React Testing Library was used to test user interactions.
Accessible labels and button names were used in test queries.
Business logic was separated into utility functions.
Test cases were organized using describe() and test().
User interactions were simulated using userEvent.
Error handling and input validation were included.
Meaningful test descriptions were used.
Temporary debugging statements were removed before submission.
9. Challenges Faced

Some challenges encountered during testing included:

Understanding how to test React Context.
Managing component dependencies during testing.
Simulating user interactions.
Testing navigation using React Router.
Validating form input and error messages.
Testing shared state between components.
Identifying errors through failed test assertions.
Configuring Jest with the jsdom environment.
These challenges helped improve understanding of React component architecture and testing methodologies.

10. Learning Outcomes

Through this assignment, the following skills were developed:

Understanding unit testing and integration testing.
Using Jest to test JavaScript functions.
Using React Testing Library to test React components.
Testing user interactions.
Validating customer information.
Testing shopping cart calculations.
Debugging application errors.
Generating code coverage reports.
Improving application reliability and maintainability.
11. Screenshots and Testing Evidence

The following screenshots demonstrate the application functionality and testing results.

Screenshot 1: Jest Test Results

Shows all six test suites passing and all 28 test cases passing.

!Jest Test Results

Screenshot 2: Code Coverage Report

Shows the statement, branch, function, and line coverage generated by Jest.

!Coverage Report

Screenshot 3: Food Menu

Shows the food products displayed in the FoodieHub application.

!Food Menu

Screenshot 4: Shopping Cart

Shows products added to the cart, quantities, and total price.

!Shopping Cart

Screenshot 5: Checkout Page

Shows the customer information form.

!Checkout Page

Screenshot 6: Form Validation

Shows validation messages for invalid or empty customer information.

!Form Validation

Screenshot 7: Order Success Page

Shows the successful order confirmation.

!Order Success

Screenshot 8: Project Test Structure

Shows the test files and Jest configuration in the project.

!Project Structure

12. Conclusion

The Week 5 testing and debugging activity helped strengthen the reliability of the FoodieHub ReactJS application.

Jest and React Testing Library were used to create test cases for the application's components, business logic, and integrated workflows.

The testing strategy focused on shopping cart operations, food searching, category filtering, checkout validation, order calculations, and successful order processing.

Debugging techniques were also incorporated to identify potential problems and improve application behavior.

The application successfully passed all 28 test cases across six test suites, achieving 90.90% line coverage.

Overall, this assignment demonstrates the importance of testing and debugging in developing reliable, maintainable, and user-friendly ReactJS applications.

Project: FoodieHub – Online Food Ordering Application
Assignment: Week 5 – ReactJS Testing and Debugging
Testing Framework: Jest and React Testing Library
Final Test Result: 28/28 Tests Passed
