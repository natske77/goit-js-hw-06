const nameInput = document.querySelector('#name-input');
const nameOutout = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    if (nameInput.value === "") {
        nameOutout.textContent = "Anonymous";
    } else {
        nameOutout.textContent = nameInput.value;
    }
});