
function validateSyntax() {
    // Get the value of the input field with ID 'petInput'
       let input = document.getElementById('petInput').value;

    // Define placeholders for validation results
    // declared constant variables and assigned them with a string literal value
       const result1 = 'Valid Syntax 🟢'; 
       const result2 = 'Invalid Syntax 🔴'; 

    // Regular expression pattern to validate input
       if (/^pet_\d{4}\S+$/.test(input)) {

    // updates the text displayed in the HTML element with the ID "result" to the value stored in the variable result().
     // If input matches the pattern, set the result as 'Valid Syntax 🟢'
        document.getElementById('result').innerText = result1; 
    } else {
    // If input doesn't match the pattern, set the result as 'Invalid Syntax 🔴'
       document.getElementById('result').innerText = result2;
    }
}
    





