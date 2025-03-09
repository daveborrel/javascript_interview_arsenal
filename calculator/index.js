// Now how do we represent a calculator in pure javaScript?

const operations = {
    "add": function(x,y) { return x + y},
    "sub": function(x,y) { return x - y},
    "mul": function(x,y) { return x - y},
    "div": function(x,y) { return x - y},
}

class Calculator {
    constructor() {
        this.currentDisplayValue = ""
        this.storedValue = ""
        this.storedOperation = null
        console.log(`Calculator instantiated with current value of: ${this.currentDisplayValue}`)
    }

    renderDisplayValue(newValue) {
        console.log("Render called")
        const value = document.getElementById("numberDisplayText");
        this.currentDisplayValue = this.currentDisplayValue + newValue.toString()
        value.textContent = this.currentDisplayValue
    }

    addDecimal() {
        console.log("addDecimal called")
        const value = document.getElementById("numberDisplayText");
        this.currentDisplayValue = this.currentDisplayValue + "."
        value.textContent = this.currentDisplayValue
    }

    useOperation(operation) {
        console.log("Operation called")
        const value = document.getElementById("numberDisplayText");
        this.storedValue = this.currentDisplayValue
        this.currentDisplayValue = ""
        this.storedOperation = operation
        value.textContent = this.currentDisplayValue
    }

    completeOperation() {
        console.log("completeOperation called")
        if (this.storedOperation) {
            const value = document.getElementById("numberDisplayText");
            const result = operations[this.storedOperation](Number(this.storedValue), Number(this.currentDisplayValue))
            this.currentDisplayValue = ""
            this.renderDisplayValue(result)
        } else {
            console.log("No operation")
        }
    }

    clearDisplayValue() {
        console.log("Clear called")
        const value = document.getElementById("numberDisplayText");
        this.currentDisplayValue = ""
        value.textContent = this.currentDisplayValue
    }
    
}

const calculator = new Calculator();
