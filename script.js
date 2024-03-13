
function validateSyntax() {
    // Get the value of the input field with ID 'petInput'
    let input = document.getElementById('petInput').value;

    // Define placeholders for validation results
    const result1 = 'Valid Syntax 🟢'; // Indicates valid syntax
    const result2 = 'Invalid Syntax 🔴'; // Indicates invalid syntax

    // Regular expression pattern to validate input
    if (/^pet_\d{4}\S+$/.test(input)) {
        // If input matches the pattern, set the result as 'Valid Syntax 🟢'
        document.getElementById('result').innerText = result1;
    } else {
        // If input doesn't match the pattern, set the result as 'Invalid Syntax 🔴'
        document.getElementById('result').innerText = result2;
    }
}
    