function BMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  bmi = Math.round(weight / height ** 2);

  if (bmi < 18.5) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + bmi + ", so you are underweight.";
  } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + bmi + ", so you are normal.";
  } else if ((bmi > 24.9) && (bmi >= 29.9)) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + bmi + ", so you are overweight.";
  } else if ((bmi > 29.9) && (bmi <= 34.9)) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + bmi + ", so you are obese.";
  } else {
    document.getElementById("result").innerHTML =
      "Your BMI is " + bmi + ", so you are extremely obese.";
  }
}

