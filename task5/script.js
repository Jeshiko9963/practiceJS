const textInput = document.getElementById('textInput');
const duplicateField = document.getElementById('duplicateField');
const submitButton = document.getElementById('submitButton');

textInput.addEventListener('input', function() {
    duplicateField.textContent = textInput.value;
});

submitButton.addEventListener('click', function() {
    const text = textInput.value;
    console.log(text);

    textInput.value = '';
    duplicateField.textContent = '';      
});