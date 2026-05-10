// 1. Captura de datos: Se solicita información al usuario mediante ventanas emergentes
const nombre = prompt("Enter your name:");  // Pide el nombre y lo guarda en la constante 'nombre'
const edad = prompt("Enter your age:");     // Pide la edad y la guarda en la constante 'edad' (como texto)

// 2. Validación de la entrada: Verifica si lo ingresado en 'edad' es un número
if (isNaN(edad)) {
    // Si la función isNaN devuelve true (no es un número), muestra este error
    alert("Please enter a valid number for age.");
} 
// 3. Lógica condicional: Evalúa si el usuario es menor de edad
else if (edad < 18) {
    // Si la edad es inferior a 18, muestra un mensaje de motivación para jóvenes
    alert(`Hello, ${nombre}! You are ${edad} years old. You are under 18. Keep learning and enjoying coding!`);
} 
// 4. Lógica condicional: Evalúa si el usuario es mayor de edad
else if (edad >= 18) {
    // Si la edad es 18 o más, muestra un mensaje enfocado a oportunidades profesionales
    alert(`Hello, ${nombre}! You are ${edad} years old. You are an adult. Get ready for great opportunities in the world of programming!`);
}