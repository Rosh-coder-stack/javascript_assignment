# JavaScript Curriculum Assignments & Capstone Project

A structured, production-ready JavaScript learning workspace containing Assignments 1 through 6 and an interactive Capstone Project Dashboard.

---

## 📁 Project Structure

```text
js_assignment_roshni/
├── assignment1.js       # Variables (var, let, const) and typeof checks
├── assignment2.js       # Tip calculator with prompt() and Number() conversion
├── assignment3.js       # Grade evaluation using if...else, switch, and ternary
├── assignment4.js       # Loops (for, while, do...while) with break & continue
├── assignment5.js       # Functions, default parameters, and block scope tests
├── assignment6.js       # Array methods (forEach, filter, map) on product objects
├── capstone_project.js  # Interactive Product Inventory & Analytics Dashboard
├── index.html           # Interactive web runner with live terminal & prompt() test bench
└── README.md            # Project documentation and execution instructions
```

---

## 🚀 Execution Guide

### 1. Running via Web Browser (`index.html`)
The interactive `index.html` file provides a web-based testing workbench. It features an integrated live terminal emulator and allows triggering browser `prompt()` dialogs for interactive scripts.

- Double click [index.html](file:///C:/js_assignment_roshni/index.html) or open it with any web browser (Chrome, Edge, Firefox).
- Click any button to run individual assignments or run all sequentially.
- Native modal dialogs will appear for `assignment2.js` and `capstone_project.js`.

### 2. Running via Node.js CLI
All scripts include sensible CLI fallback values and can be executed directly in your terminal:

```bash
# Assignment 1: Variables & Data Types
node assignment1.js

# Assignment 2: Tip Calculator (prompt fallback)
node assignment2.js

# Assignment 3: Score Evaluation
node assignment3.js

# Assignment 4: Loops & Jump Statements
node assignment4.js

# Assignment 5: Functions & Scope Testing
node assignment5.js

# Assignment 6: Array Iteration & Transformation
node assignment6.js

# Capstone Project: Product Inventory & Analytics Dashboard
node capstone_project.js
```

---

## 📋 Assignment Specifications & Outputs

### Assignment 1: Variables & Data Types (`assignment1.js`)
- Declares variables using `var`, `let`, and `const` for user details.
- Logs exact types using `typeof`.
- **Expected Output:**
  ```text
  Name: Alice (Type: string)
  Age: 25 (Type: number)
  Is Employed: true (Type: boolean)
  Skills: ["HTML", "CSS", "JavaScript"] (Type: object)
  ```

### Assignment 2: Tip Calculator (`assignment2.js`)
- Captures bill amount and tip percentage using `prompt()`.
- Explicitly converts inputs with `Number()`.
- Calculates tip and total amount to pay.
- **Expected Output:**
  ```text
  Subtotal: $100
  Tip Percentage: 15%
  Calculated Tip: $15
  Total Amount to Pay: $115
  ```

### Assignment 3: Score Evaluation & Grading (`assignment3.js`)
- Evaluates numerical score (`score = 85`).
- Determines letter grade using `if...else` ladder.
- Evaluates grade via `switch` statement.
- Applies ternary operator for pass/fail determination (threshold 60).
- **Expected Output:**
  ```text
  Score: 85
  Grade: B
  Status: Passed
  ```

### Assignment 4: Loops & Control Flow (`assignment4.js`)
- `for` loop: Multiplication table of 5 up to 5.
- `while` loop: `break` statement to locate the first number > 10 divisible by 6 (`Found: 12`).
- `do...while` loop: `continue` statement demonstrating skipped iterations.

### Assignment 5: Functions, Default Parameters & Scope (`assignment5.js`)
- Standard function and arrow function with default parameters (`length = 5, width = 4`).
- Custom invocation of arrow function with `(10, 3)`.
- Variable scope test attempting to access block-scoped `let` outside its block wrapped in `try...catch`.
- **Expected Output:**
  ```text
  Standard Function (Default: 5, 4): Area = 20
  Arrow Function (Custom: 10, 3): Area = 30
  Scope Test Error: ReferenceError: blockVar is not defined
  ```

### Assignment 6: Array Operations (`assignment6.js`)
- Initializes product objects: Laptop ($800), Mouse ($25), Keyboard ($45).
- `forEach()` logs each item and price.
- `filter()` filters items under $50.
- `map()` formats items into tags: `["LAPTOP costs $800", "MOUSE costs $25", "KEYBOARD costs $45"]`.

### Capstone Project: Product Inventory & Analytics Dashboard (`capstone_project.js`)
- Initial inventory: Laptop ($800) and Mouse ($25).
- Interactive `prompt()` captures new product name and price, sanitizes values, and appends to inventory array.
- Tier categorization via function: Budget (<$100), Standard ($100–$499), Premium (>= $500).
- `forEach()` logs inventory roster with item details and category badge.
- Computes total inventory value.
- `filter()` extracts names of affordable items under $200.
- `map()` produces uppercase report strings.
- **Expected Output:**
  ```text
  --- Initializing Inventory System
  [Prompt executed: User adds "Monitor" at "$150"]
  Processing Inventory Roster (forEach)
  * Item: Laptop ($800) -> Category: Premium
  * Item: Mouse ($25) -> Category: Budget
  * Item: Monitor ($150) -> Category: Standard
  Financial Analytics
  Total Inventory Value: $975
  Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]
  Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]
  ```
