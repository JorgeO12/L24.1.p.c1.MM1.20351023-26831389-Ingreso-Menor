/**
 * Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75)
Monto del ingreso menor: 75$
Ingreso promedio:130 

 */

import Cl_Persona from "./Cl_Persona.js";
import Cl_Ingreso from "./Cl_Ingreso.js";

let p1 = new Cl_Persona("Mary", 150);
let p2 = new Cl_Persona("Jose", 135);
let p3 = new Cl_Persona("Carlos", 160);
let p4 = new Cl_Persona("Pedro", 75);

let i = new Cl_Ingreso();
i.procesar(p1);
i.procesar(p2);
i.procesar(p3);
i.procesar(p4);

let salida = document.getElementById("salida");
salida.innerHTML = `
Monto del ingreso menor: ${i.mnrIngreso}$
<br>Ingreso promedio: ${i.promedio()}`