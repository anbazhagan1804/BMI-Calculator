function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    let weight = parseFloat(document.getElementById("weight").value);

    if (height > 0 && weight > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let resultDiv = document.getElementById("result");
        let bmiValue = document.getElementById("bmi-value");
        let bmiCategory = document.querySelector(".bmi-category");

        bmiValue.textContent = bmi;

        if (bmi < 18.5) {
            bmiCategory.textContent = "Underweight";
            bmiCategory.style.color = "#fbc02d"; // yellow
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory.textContent = "Normal weight";
            bmiCategory.style.color = "#388e3c"; // green
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory.textContent = "Overweight";
            bmiCategory.style.color = "#f57c00"; // orange
        } else {
            bmiCategory.textContent = "Obese";
            bmiCategory.style.color = "#d32f2f"; // red
        }

        resultDiv.classList.remove("hidden"); // Show the result
    } else {
        alert("Please enter valid values for height and weight.");
    }
}
