// Error message ..................................
function showError() {
    document.getElementById("error-msg").style.display = "block";
    return 0;
}

function showEmptyError() {
    document.getElementById("empty-error").style.display = "block";
    return 0;
}

function showEmptyIncome() {
    document.getElementById("empty-income").style.display = "block";
    return 0
}



// Cost calulation ..................................
function getCost() {
    const foodCost = document.getElementById("food-input").value;
    const rentCost = document.getElementById("rent-input").value;
    const clothsCost = document.getElementById("cloth-input").value;
    if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothsCost)) {
        showError();
    }
    else if (foodCost == "" || rentCost == "" || clothsCost == "") {
        showEmptyError();
    }
    else {
        if (foodCost > 0 && rentCost > 0 && clothsCost > 0) {
            const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothsCost);
            document.getElementById("error-msg").style.display = "none";
            document.getElementById("empty-error").style.display = "none";
            document.getElementById("negative-error").style.display = "none";
            return totalCost;
        }
        else {
            document.getElementById("negative-error").style.display = "block";
            return 0;
        }
    }
}



// Balance calulation ..................................................
// function getBalance() {
//     const totalCost = getCost();
//     const income = document.getElementById("income").value;
//     if (income == "") {
//         showEmptyIncome();
//     }
//     else if (isNaN(income) || income < 0) {
//         showError();
//     }
//     else if (totalCost > income) {
//         document.getElementById("income-error").style.display = "block";
//         document.getElementById("empty-income").style.display = "none";
//         return 0;
//     }
//     else {
//         const newBalance = parseInt(income) - totalCost;
//         document.getElementById("income-error").style.display = "none";
//         document.getElementById("empty-income").style.display = "none";
//         if (isNaN(newBalance)) {
//             return 0
//         }
//         else
//             return newBalance;
//     }
// }



// Calculate button handeler ...................................................
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener('click', function () {
    const totalCost = getCost();
    const showCost = document.getElementById("total-cost");
    const showBalance = document.getElementById("balance");
    showCost.innerText = totalCost;
    showBalance.innerText = getBalance();
})

// Save button handeler ........................................................
document.getElementById("save-btn").addEventListener('click', function () {
    const currentBalance = document.getElementById("balance").innerText;
    const percent = document.getElementById("save-input").value;
    if (percent > 0 && percent <= 100 && isNaN(currentBalance) == false) {
        const save = (currentBalance * percent) / 100;
        document.getElementById("save-amount").innerText = save;
        document.getElementById("remaining-balance").innerText = parseInt(currentBalance) - save
        document.getElementById("percent-error").style.display = "none";
    }
    else {
        document.getElementById("percent-error").style.display = "block";
    }

})
