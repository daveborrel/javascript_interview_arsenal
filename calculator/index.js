// Now how do we represent a calculator in pure javaScript?

class Calculator {
    constructor(value) {
        this.value = value
    }

    renderDisplayValue() {
        const value = document.getElementsByClassName("numberDisplay");
        value.textContent = this.value;

        console.log(`changed value to ${this.value}`)
    }
}

const calculator = new Calculator(0);
calculator.renderDisplayValue();
