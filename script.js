const currOne = document.getElementById('selcurr1');
const currTwo = document.getElementById('selcurr2');
const amtOne = document.getElementById('amt1');
const amtTwo = document.getElementById('amt2');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');
const exchangeRates = {
    USD: 1,
    INR: 75.50,
    EUR: 0.85,
    AUD: 1.35,
    CAD: 1.25
};

function RateE(amount, fromCurrency, toCurrency) {
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    return amount * rate;
}

function calculate() {
    const amount1 = parseFloat(amtOne.value);
    const fromCurrency = currOne.value;
    const toCurrency = currTwo.value;

    const result = RateE(amount1, fromCurrency, toCurrency);
    amtTwo.value = result.toFixed(2);
    rate.innerText = `1 ${fromCurrency} = ${RateE(1, fromCurrency, toCurrency).toFixed(4)} ${toCurrency}`;
}
currOne.addEventListener("change", calculate);
currTwo.addEventListener("change", calculate);
amtOne.addEventListener("input", calculate);
calculate();