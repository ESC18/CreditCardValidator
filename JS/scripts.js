function lengthValidation(input) {
    if (input.length >= 14 && input.length <= 16) {
        return startNumValidation(input);
    } else {
        if (input.length < 14) {
            return displayResult(false, 1);
        }
        else if (input.length > 16) {
            return displayResult(false, 2);
        }
    }
}

function startNumValidation(input) {
    switch (input.charAt(0)) {
        case '4':
            numberSplit(input);
            break;
        case '5': numberSplit(input);
            break;
        case '6': numberSplit(input);
            break;
        case '3':
            if (['7', '4'].includes(input.charAt(1))) {
                numberSplit(input);
                break;
            } else {
                displayResult(false, 3);
                break;
            };
        default:
            return displayResult(false, 3);
    }
}

function numberSplit(input) {
    let toNum = parseInt(input);
    let numArray = Array.from(String(toNum), Number);
    return luhnFormula(numArray);
}

function luhnFormula(inputArray) {
    let resultArray = [];
    let shouldMultiply = false;

    for (let i = inputArray.length -1; i >= 0; i--) {
        let num = inputArray[i];
        if (shouldMultiply) {
            num *= 2;
            if (num > 9) {
                num -= 9;
            }
        }
        resultArray.unshift(num);
        shouldMultiply = !shouldMultiply;
    }

    return arraySum(resultArray);
}


function arraySum(resultArray) {
    let sum = 0;
    resultArray.forEach(num => {
        sum += num;
    })
    return divisibleByTen(sum);
}

function divisibleByTen(sum) {
    let sumResult = sum % 10;
    if (sumResult === 0) {
        return displayResult(true);
    } else {
        return displayResult(false, 4);
    }
}

function displayResult(value, errorNum) {
    let resultDiv = document.getElementById("result");
    switch (value) {
        case true:
            resultDiv.innerHTML = "Your card is valid";
            break;
        case false:
            switch (errorNum) {
                case 1:
                    resultDiv.innerHTML = "Card Invalid: Please enter at least 14 digits";
                    break;
                case 2:
                    resultDiv.innerHTML = "Card Invalid: Please enter a maximum 16 digits";
                    break;
                case 3:
                    resultDiv.innerHTML = "Card Invalid: issuer # not valid";
                    break;
                case 4:
                    resultDiv.innerHTML = "Card Invalid: Card # is not valid";
                    break;
            }
    }
}



function initializer() {
    let form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let input = document.querySelector("input").value.toString();
        lengthValidation(input);
    });
}


initializer();
