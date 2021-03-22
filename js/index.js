class Equation {
    constructor (leftOperand, rightOperand, operator) {
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.operator = operator;
    }

    //Getters
    getLeftOperand () {
        return this.leftOperand;
    }

    getRightOperand () {
        return this.rightOperand;
    }

    getOperator () {
        return this.operator;
    }

    isNumber (value) {
        const regex = /\d+/gi;
        
        if (!value.match(regex)) {
            return false;
        }

        return true;
    }

    getResult(left, right, operation) {
        let result = 0;

        if (operation === '+') {
            result = left + right;
        } else if (operation === '-') {
            result = left - right;
        } else if (operation === '/') {
            result = left / right;
            result = result.toFixed(2);
        } else if (operation === '*') {
            result = left * right;
        } else if (operation === '%') {
            result = left % right;
        }

        return result;
    }

    performCalculation () {
        if (this.isNumber(this.getLeftOperand()) && this.isNumber(this.getRightOperand())) {
            let solution = document.getElementById('result');
            solution.textContent = this.getResult(+this.getLeftOperand(), +this.getRightOperand(), this.getOperator());
        } else {
            alert('Invalid Value: Please enter a number!');
        }
    }
}

function calculateEquation () {
    const leftOperand = document.getElementById('operand-left').value;
    const rightOperand = document.getElementById('operand-right').value;
    const operator = document.getElementById('operators').value;

    const myEquation = new Equation (leftOperand, rightOperand, operator);
    myEquation.performCalculation();
}