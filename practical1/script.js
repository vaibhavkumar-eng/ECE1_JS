function calculateResult() {
    let n = Number(document.getElementById("Subjects").value);
    let total = 0;
    let grade = "";

    for (let i = 0; i < n; i++) {
        let x = prompt("Enter marks for subject no. " + (i + 1));
        total += Number(x);
    }

    let avg = total / n;

    if (avg >= 90) {
        console.log("A++") ;
    } else if (avg >= 80) {
        console.log("A+")
    } else if (avg >= 70) {
        console.log("A")
    } else {
        console.log("b ");    }

    document.getElementById("result").innerHTML = 
        "Total Marks: " + total + "<br/>" +
        "Average marks: " + avg.toFixed(2) + "<br/>" + 
        "Grade: " + grade;
}