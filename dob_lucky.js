const birthDate = document.querySelector("#birthDay");
const luckyNumber = document.querySelector("#luckyNum");
const checkButton = document.querySelector("#button");
const output = document.querySelector("#consoleOutput");

function innertextOutput(sum, num) {

    console.log(sum, sum % num)

    if (sum % num === 0) {

        output.innerText = "Hey, Yo!!! Your Birthdate is lucky 😍";
    } else {
        output.innerText = "This is not your lucky number 😟";
    }

}

function sumCalculation(birthDate) {
    birthDate = birthDate.replaceAll('-', '')
    let sum = 0;
    
    for (var i = 0; i < birthDate.length; i++) {
        sum = sum + Number(birthDate.charAt(i))
    }
    return sum;
}

function checkLuckyNumber() {
    const dateOfBirth = birthDate.value;
    const luckyNum = luckyNumber.value;

    var totalSum = sumCalculation(dateOfBirth);
    
    if(dateOfBirth && luckyNum) {
        innertextOutput(totalSum, luckyNum)
    } else {
        output.innerText = "Please Enter both the inputs 🤷‍♂️"
    }







}








checkButton.addEventListener("click", checkLuckyNumber)