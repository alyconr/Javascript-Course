// Ejercicio 1
var person = {
  name: 'Lucas',
  age: '27',
  profession: 'Developer'
};

const properties = Object.keys(person);
console.log(properties);
// Ejercicio 2
// Contexto Global
console.log(this === window)  // true
//Cuando se hace uso de this fuera de cualquie función siempre se hace referencia al objeto global. En el caso del navegador hacemos referencia al objeto window.

//En una función con modo estricto
//Las funciones que hacen uso del modo "strict" devuelven el valor "undefined"

function f1() {
    return this;
}   
f1(); // undefined
//En un metodo
const pers = { //propietario
    name: 'Aly',
    sayHello: function () { 
        return `Hola, soy ${this.name}` 
    }
}
pers.sayHello(); // Hola, soy Aly
///Dentro de un método this hae referencia al propietario.

//En una método con array funtion .
const per = { 
    name: 'Aly',
    sayHello: () => { 
        console.log( `Hola, soy ${this.name}`)
    }
}

per.sayHello(); 
//En un Evento
function actionButtonReceiver(button) {
    console.log("Button pressed with->");
    console.log(button);
}
// Ejercicio 3
const stringRever = cadena => [...cadena].reverse().join('');
stringRever('hola mundo');


// Ejercicio 4
class Login {
  constructor(username, password) {
      this.username = username;
      this.password = password;
  }

  logint ()  {
      let username;
      let password;
      if ( this.username === "admin" && this.password === "passwd" ) { 
          alert( "Usuario esta logueado");
      }
      else { 
          alert("Usuario o password incorrecto");
      }

  }
}
  let login = new Login("admin","passwd");
  let logbad= new Login("pepe","bad");

  login.logint(); // Usuario está logueado
  logbad.logint(); // Uusuario o password incorrecto
// Ejercicio 5

document.getElementById("loginSuccess").addEventListener("click",logins,false);
function logins (){
  alert("correcto");
}

function cli () {
  let usernames;
  let passwords;
      if ( this.usernames === "admin" && this.passwords === "passwd" ) { 
          alert( "Usuario esta logueado");
      }
      else { 
          alert("Usuario o password incorrecto");
      }
 // alert("incorrecto");
}
let login1 = new cli("admin ","passwd");
document.getElementById("loginFailure").addEventListener("click",cli,false);

// Ejercicio 6
document.getElementById("loginSuccessAsync").addEventListener("click",loginWitUsername,false);
let loginWitUsername = async (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
//FINAL ACTIVIDAD 2