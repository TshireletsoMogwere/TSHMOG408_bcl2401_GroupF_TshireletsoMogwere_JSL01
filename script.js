function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result
    
    // Regular expression pattern to match
    let pattern = /^pet_\d+[a-zA-Z]+$/;

    // Check if input matches the pattern
    if (pattern.test(input)) {
        result = 'Valid Syntax 🟢'; // Set result to 'Valid Syntax' if input matches the pattern
    } else {
        result = 'Invalid Syntax 🔴'; // Set result to 'Invalid Syntax' if input doesn't match the pattern
    }

    // Update the result text content
    let resultElement = document.getElementById('result');
    if (resultElement) { // Check if the result element exists
        resultElement.innerText = result; // Update the text content of the result element
    } else {
        console.error("Result element not found!"); // Log an error if the result element is not found
    }
}


