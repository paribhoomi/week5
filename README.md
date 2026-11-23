# 🍔 FoodieHub – Online Food Ordering Application

A responsive online food ordering application built using **ReactJS**. FoodieHub allows users to browse food products, search and filter items, manage their shopping cart, and place orders through a checkout process.

---

## 📌 Project Overview

FoodieHub is a ReactJS-based food ordering platform developed to demonstrate front-end development concepts, component-based architecture, state management, and application testing.

This project was also tested using **Jest** and **React Testing Library** to improve application reliability and maintainability.

---

## ✨ Features

* 🍕 Browse available food products
* 🔍 Search food items by name
* 🗂️ Filter products by category
* 🛒 Add products to the shopping cart
* ➕ Increase or decrease product quantities
* ❌ Remove products from the cart
* 💰 Calculate cart totals automatically
* 📝 Customer information form
* ✅ Checkout form validation
* 🎉 Order confirmation page
* 📱 Responsive user interface

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **ReactJS** | Front-end development |
| **JavaScript** | Application logic |
| **HTML5** | Application structure |
| **CSS3** | Styling and responsive design |
| **React Router** | Navigation |
| **React Context API** | Shopping cart state management |
| **Jest** | Testing framework |
| **React Testing Library** | Component and integration testing |
| **Babel** | JavaScript and JSX transformation |

---

## 📂 Project Structure

```text
foodiehub/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── Checkout.jsx
│   │   ├── FoodCard.jsx
│   │   ├── FoodMenu.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Success.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── data/
│   │   └── food.js
│   │
│   ├── tests/
│   │   ├── CartContext.test.jsx
│   │   ├── Checkout.test.jsx
│   │   ├── ComponentTests.test.jsx
│   │   ├── FoodCard.test.jsx
│   │   ├── FoodMenu.test.jsx
│   │   └── orderUtils.test.js
│   │
│   ├── utils/
│   │   └── orderUtils.js
│   │
│   └── setupTests.js
├── screenshots/
├── WEEK5_TESTING_DEBUGGING_REPORT.md
├── package.json
├── package-lock.json
├── jest.config.js
└── babel.config.js
```

---

## ⚙️ Installation and Setup

1. **Clone the repository**
   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```
   > Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

2. **Navigate to the project folder**
   ```bash
   cd foodiehub
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the application**
   ```bash
   npm start
   ```
   The application will run locally at the address displayed in your terminal.

---

## 🧪 Testing and Debugging

**Jest** and **React Testing Library** were used to test individual components, business logic, and interactions between components.

* **Run all tests**
  ```bash
  npm test
  ```

* **Run tests in watch mode**
  ```bash
  npm run test:watch
  ```

* **Generate code coverage report**
  ```bash
  npm run test:coverage
  ```

### 📊 Testing Results

The application successfully passed all implemented test cases.

| Testing Metric | Result |
| :--- | :--- |
| **Total Test Suites** | 6 |
| **Passed Test Suites** | 6 |
| **Failed Test Suites** | 0 |
| **Total Test Cases** | 28 |
| **Passed Test Cases** | 28 |
| **Failed Test Cases** | 0 |
| **Statement Coverage** | 91.17% |
| **Branch Coverage** | 84.09% |
| **Function Coverage** | 92.68% |
| **Line Coverage** | 90.90% |

**Final Result:** `28/28` test cases passed successfully.

---

## 📸 Screenshots

Application and testing screenshots are available in the `screenshots/` directory.

### Food Menu
![Food Menu](screenshots/food-menu.png)

### Shopping Cart
![Shopping Cart](screenshots/shopping-cart.png)

### Checkout Page
![Checkout Page](screenshots/checkout-page.png)

### Order Success
![Order Success](screenshots/order-success.png)

### Jest Test Results
![Jest Test Results](screenshots/jest-test-results.png)

### Code Coverage
![Code Coverage](screenshots/code-coverage.png)

---

## 📄 Testing Documentation

The detailed Week 5 Testing and Debugging Report is available here:
[`WEEK5_TESTING_DEBUGGING_REPORT.md`](WEEK5_TESTING_DEBUGGING_REPORT.md)

It includes:
* Testing objectives and strategy
* Unit testing and integration testing
* Test cases and expected results
* Bug identification and debugging
* Test execution results
* Code coverage analysis
* Learning outcomes

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:
* Developing ReactJS applications
* Building reusable components
* Managing shared state using React Context API
* Implementing navigation using React Router
* Writing unit and integration tests
* Testing user interactions
* Debugging application errors
* Generating code coverage reports

---

## 👨‍💻 Author

**FoodieHub – ReactJS Food Ordering Application**
Developed as part of a ReactJS learning and development project.

---

## 📝 License

This project is intended for educational and learning purposes.
