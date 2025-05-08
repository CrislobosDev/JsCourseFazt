// Funcion con parametros por defecto

// function add(a, b = 0) {
//   return a + b;
// }

// console.log(add(4, ));

// ____________________________________________________________

// Objetos

// const user = {
//     name: "John",  // Estas son las propiedades del objeto, son como variables dentro de un objeto
//     lastname: "Doe",
//     age: 30,
//     address: {
//         country: 'Chile',
//         city: 'Santo Domingo',
//         street: 'El convento'
//     },
//     friends: ['Jane', 'Mary', 'Bob'],
//     sendMail: function() {     // Esto se llama un metodo, es una funcion dentro de un objeto
//         console.log('Enviando un correo a ' + this.name + '' + this.lastname + '...')
//     }
// }

// console.log(user.address.country)
// console.log(user.friends)
// console.log(user.age)
// console.log(user.sendMail(user.name))

// _____________________________________________________________

// Manipulacion del DOM

// const title = document.createElement('h1'); // Crea un elemento h1
// title.innerText = 'Hola desde JS'; // Cambia el texto del elemento h1

// const button = document.createElement('button'); // Crea un elemento button
// button.innerText = 'Click me'; // Cambia el texto del elemento button

// // Event Handler
// button.addEventListener('click', function() {
//     title.innerText = 'Texto cambiando con JS'; // Cambia el texto del elemento h1 al hacer click en el boton
// })

// document.body.appendChild(title); // Agrega el elemento h1 al body del documento
// document.body.appendChild(button); // Agrega el elemento button al body del documento

//______________________________________________________________

// Desestructuracion de objetos

// const user = { // Objeto user con propiedades name, age
//     name: 'John',
//     age: 30,
// }

// function printInfo(user) {
//     const {name, age} = user; // Desestructuracion de objetos, extrae las propiedades name y age del objeto user

//     return '<h1> Hola ' + name + '</h1>'; // Devuelve un string con el nombre del usuario
// }

// console.log(printInfo(user))

// document.body.innerHTML = printInfo(user); // Cambia el contenido del body del documento por el resultado de la funcion printInfo

//______________________________________________________________

// Funciones anonimas

// const button = document.createElement('button');
// button.innerText = 'Click me'; // Cambia el texto del elemento button

// button.addEventListener('click', function() {
//     alert('me presionaste');
// })

// document.body.append(button);

// _____________________________________________________________________

// Arrow function

// function add (a, b) {
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// } // Arrow function, es una forma mas corta de escribir una funcion

const showText = () => 'Hola Mundo'; // Arrow function sin parametros, devuelve un string

console.log(showText());