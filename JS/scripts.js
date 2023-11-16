function lengthValidation(input) {
    if (input.length() >= 14 && input.length() <= 16) {
        return startNumValidation(input);
    } else {
        if (input.length() < 14) {
            return displayResult(false, 1);
        }
        else if (input.length() > 16) {
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
            };
        default:
            return displayResult(false), 3;
    }
}

function numberSplit(input) {
    toNum = parseInt(input);
    toNum.split('');
    return luhnFormula(toNum);
}

function luhnFormula(inputArray) {
    
}






function initializer() {
    let form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let input = document.querySelector("input").value.toString();
        lengthValidation(input);
    });
}


initializeForm();
