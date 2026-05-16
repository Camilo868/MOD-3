console.log("-- task 1 --");

const productos = [
    {id : 1, name : "nevera", precio : 2000000},
    {id : 2, name : "botso", precio : 45000},
    {id : 3, name : "telefono de segunda", precio : 150000},
];

console.log(productos);
console.log("-- task 2 --");

const lista = [1,1,2,3,3,5,8,9,9]

let mySet = new Set(lista);
console.log(mySet);

mySet.add(10);
console.log(mySet);

const buscarNumero = mySet.has(4);
console.log(buscarNumero);
console.log(`Exite el numero 4 en la lista? ${buscarNumero}`)

mySet.delete(10)
console.log(mySet);

for (iterado of mySet) {
    console.log(iterado);
}
console.log("-- task 3 --");

const nombreProductos = productos.map(producto => [producto.name, producto.precio]);
console.log(nombreProductos);

console.log("-- task 4 --");

for (let elemento of productos){

    for (let propiedad in elemento){
        console.log(`${propiedad}: ${elemento[propiedad]}`);
    }
}

for (let iterador of mySet){
    console.log(iterador);
}

nombreProductos.forEach((clave, valor) => {
    console.log(`${valor}.Producto: ${clave[0]} - Precio: $${clave[1]}`);
});

console.log("-- task 5 --");

for (const iterador of productos) {
    if(!iterador.id || !iterador.name || !iterador.precio) {
        console.error("¡¡ERROR!! datos vacios");
    } else {console.log(iterador);
    }
}
