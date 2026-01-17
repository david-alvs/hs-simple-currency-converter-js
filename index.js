const input = require('sync-input');

const rates = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75
};

const convertCurrency = (amount, from, to) => {
  return (amount / rates[from]) * rates[to];
};

const isCurrencyValid = (currency) => {
  return rates.hasOwnProperty(currency);
};

const showWelcomeMessage = () => {
  console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
}

const askForCurrency = (promptText, printHeader = false) => {
  while (true) {
    if (printHeader) console.log("What do you want to convert?");
    const currency = input(promptText).toUpperCase();
    if (isCurrencyValid(currency)) return currency;
    console.log("Unknown currency");
  }
};

const main = () => {
  showWelcomeMessage();

  while (true) {
    console.log(`What do you want to do?`);
    const userInput = input(`1-Convert currencies 2-Exit program\n`);

    if (userInput !== '1' && userInput !== '2') {
      console.log(`Unknown input`);
      continue;
    }

    if (userInput === '2') {
      console.log(`Have a nice day!`);
      break;
    }

    const from = askForCurrency('From: ', true);
    const to = askForCurrency('To: ', false);

    let amount;

    do {
      amount = Number(input(`Amount: `));

      if (isNaN(amount)) {
        console.log(`The amount has to be a number`);
      } else if (amount < 1) {
        console.log(`The amount cannot be less than 1`);
      } else {
        break;
      }
    } while (true);

    const conversion = convertCurrency(amount, from, to);
    console.log(`Result: ${amount} ${from} equals ${conversion.toFixed(4)} ${to}`);
  }
};

main();
