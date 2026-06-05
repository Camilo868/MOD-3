// ===== REFERENCIAS DEL DOM =====
const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const btnAgregar = document.getElementById('btnAgregar');
const btnSincronizar = document.getElementById('btnSincronizar');
const listaProductos = document.getElementById('listaProductos');
const mensaje = document.getElementById('mensaje');

// ===== ARREGLO GLOBAL =====
let productos = [];

// ===== LOCAL STORAGE: CARGAR AL INICIAR =====
if (localStorage.getItem('productos')) {
    productos = JSON.parse(localStorage.getItem('productos'));
    productos.forEach(p => renderizarProducto(p));
    console.log(`Se cargaron ${productos.length} productos del Local Storage`);
}

// ===== RENDERIZAR PRODUCTO EN EL DOM =====
function renderizarProducto(producto) {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    li.setAttribute('data-id', producto.id);

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', async function() {
        await eliminarProducto(producto.id, li);
    });

    li.appendChild(btnEliminar);
    listaProductos.appendChild(li);
}

// ===== AGREGAR PRODUCTO =====
btnAgregar.addEventListener('click', function() {
    const nombre = inputNombre.value.trim();
    const precio = inputPrecio.value.trim();

    // Validación
    if (nombre === '' || precio === '') {
        mensaje.textContent = 'Por favor completa todos los campos.';
        mensaje.style.color = 'red';
        return;
    }

    const producto = {
        id: Date.now(),
        nombre: nombre,
        precio: precio
    };

    // Agregar al DOM
    renderizarProducto(producto);

    // Agregar al arreglo y guardar en Local Storage
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));

    inputNombre.value = '';
    inputPrecio.value = '';
    inputNombre.focus();

    mensaje.textContent = `Producto "${nombre}" agregado correctamente.`;
    mensaje.style.color = 'green';
    console.log('Producto agregado:', producto);
});


async function obtenerProductos() {
    try {
        const res = await fetch('http://localhost:3000/productos');
        const data = await res.json();
        console.log('GET - Productos del servidor:', data);
        return data;
    } catch (error) {
        console.error('Error en GET:', error);
    }
}


async function enviarProducto(producto) {
    try {
        const res = await fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        });
        const data = await res.json();
        console.log('POST - Producto enviado al servidor:', data);
        return data;
    } catch (error) {
        console.error('Error en POST:', error);
    }
}


async function eliminarProducto(id, li) {
    try {
        await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'DELETE'
        });
        listaProductos.removeChild(li);
        productos = productos.filter(p => p.id !== id);
        localStorage.setItem('productos', JSON.stringify(productos));
        console.log(`DELETE - Producto ${id} eliminado`);
    } catch (error) {
        console.error('Error en DELETE:', error);
    }
}


async function actualizarProducto(id, datosActualizados) {
    try {
        const res = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizados)
        });
        const data = await res.json();
        console.log('PUT - Producto actualizado:', data);
        return data;
    } catch (error) {
        console.error('Error en PUT:', error);
    }
}

// ===== SINCRONIZAR CON API =====
btnSincronizar.addEventListener('click', async function() {
    console.log('Sincronizando con la API...');
    for (const producto of productos) {
        await enviarProducto(producto);
    }
    const data = await obtenerProductos();
    mensaje.textContent = `Sincronización completa. ${data.length} productos en el servidor.`;
    mensaje.style.color = 'blue';
});