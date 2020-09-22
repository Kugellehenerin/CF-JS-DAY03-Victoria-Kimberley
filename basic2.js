function calculator() {
    var currentYear = document.getElementById("form1").value;
    var birthYear = document.getElementById("form2").value;

    // var currentYear = prompt("type the current year :");

    var result = Number(currentYear) - Number(birthYear);

    document.getElementById("answer").innerHTML = "You are " + (result - 1) + " years old or " + result + ".";
}

// function ageCal(currentYear, birthYear) {
//     var result = currentYear - birthYear;
//     console.log("You are " + (result - 1) + " years old or " + result + ".");

// }

// function ageCal(birthYear) {
//     var date = new Date();
//     var currentYear = date.getFullYear();
//     var result = currentYear - birthYear;
//     console.log("You are " + (result - 1) + " years old or " + result + ".");