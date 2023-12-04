const inputValue = document.querySelector("#emailInput");
const inputError = document.createElement('p');


function validEmail(){

    // if no value detected provide error message
    if (inputValue.value === ''){
        inputError.textContent = 'Please provide a valid email address';

        inputValue.parentNode.appendChild(inputError);
    } 
    // if entry has now been detected and error message is present this should be removed
    else {
        inputError.remove();
    }

}; 