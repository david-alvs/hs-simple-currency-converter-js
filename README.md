# 💱 Simple Currency Converter

A robust command-line interface (CLI) application that performs real-time currency conversions. This project was developed as part of the **JavaScript for Beginners** track on [Hyperskill (JetBrains Academy)](https://hyperskill.org/projects/231).

👤 **Developer:** [David Alves](https://github.com/david-alvs)
🎓 **Hyperskill Profile:** [View my learning progress](https://hyperskill.org/my-learning/625720550)

## 📖 About

This project is a versatile currency converter tool. It allows users to convert amounts between five major currencies (USD, JPY, EUR, RUB, GBP) using a fixed exchange rate system. The program runs in a continuous loop, validating all user inputs and using USD as a pivot base to calculate conversions between any currency pair accurately.

## ✨ Features

- **Continuous Execution:** The program runs continuously until the user explicitly chooses to exit.
- **Supported Currencies:** USD, JPY, EUR, RUB, and GBP.
- **Smart Validation:**
    - Handles unknown or invalid currency codes.
    - Validates numeric inputs (rejects non-numbers).
    - Ensures amounts are not negative or less than 1.
- **Pivot Conversion Logic:** Capable of converting any supported currency to another (e.g., JPY to EUR) by mathematically pivoting through USD.
- **Robust Input Handling:** Case-insensitive inputs (accepts `usd`, `USD`, `uSd`).

## 🛠️ Tech Stack

- **Language:** JavaScript (Node.js)
- **Concepts:** Control Flow (Loops), Objects (Dictionaries), Functions, DRY Principle.
- **External Libraries:** `sync-input` (for synchronous user input handling)

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/david-alvs/hs-simple-currency-converter-js.git
   ```

2. Navigate to the project directory:
   ```bash
   cd hs-simple-currency-converter-js
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Usage

Run the application using Node.js:

```bash
node index.js
```

## 🧠 What I Learned

During the development of this project, I focused on:

- **Structuring Code:** I learned the importance of structuring code for readability and maintenance.
- **Data Structures:** I moved from using Arrays to Objects for storing exchange rates, which made data retrieval more efficient and logical.
- **DRY Principle:** I practiced the "Don't Repeat Yourself" principle by creating helper functions to handle repetitive user input validation.
- **Control Flow:** A challenge I overcame was managing the program's control flow with infinite loops (`while`) to ensure it handles invalid inputs gracefully without crashing.

## 🔗 Acknowledgements

- Project provided by [Hyperskill / JetBrains Academy](https://hyperskill.org/).

---

Made with ☕ and code by [David Alves](https://github.com/david-alvs).