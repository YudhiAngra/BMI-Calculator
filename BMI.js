let form = document.getElementById('input-form');

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get height and weight inputs
    let height = parseFloat(document.getElementById('height-input').value);
    let weight = parseFloat(document.getElementById('weight-input').value);
    let selectWeight = document.getElementById('select-weight').value;
    let selectHeight = document.getElementById('select-height').value;
    let resultContainer = document.getElementById('result-container');

    // Convert height to meters if it's in inches
    if (selectHeight === 'inch') {
        height = height * 0.0254; // Convert inches to meters
    } else if (selectHeight === 'cm') {
        height = height / 100; // Convert cm to meters
    }

    // Convert weight to kilograms if it's in pounds
    if (selectWeight === 'pounds') {
        weight = weight * 0.453592; // Convert pounds to kilograms
    }

    // Check if height and weight are valid
    if (height > 0 && weight > 0) {
        let BMI = weight / (height * height); // BMI formula
        let bmiCategory = categorizeBMI(BMI); // Get BMI category
        resultContainer.value = `${BMI.toFixed(2)} (${bmiCategory})`; // Display result with category
    } else {
        resultContainer.value = "Invalid input!";
    }
});

// Function to categorize BMI
function categorizeBMI(BMI) {
    if (BMI < 18.5) {
        return "Underweight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        return "Normal weight";
    } else if (BMI >= 25 && BMI < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}