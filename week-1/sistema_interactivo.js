const nombre = prompt("Enter your name:");
const edad = prompt("Enter your age:");
if (isNaN(edad)) {
    alert("Please enter a valid number for age.");
}else {
    alert(`Hello, ${nombre}! You are ${edad} years old.`);
}