const { Pago } = require('./arreglo');

//forEach
console.log("Ciclo forEach");
Pago.forEach(({ id_tipo_pago, id_pago, tipo, comentarios, Fecha }, ciclospagos) => {
    console.log(`Elemento ${ciclospagos + 1}:
    id_tipo_pago: ${id_tipo_pago},
    id_pago: ${id_pago},
    tipo: ${tipo},
    comentarios: ${comentarios},
    Fecha: ${Fecha}`);
});

//for in
console.log("Ciclo for in");
for (let ciclospagos in Pago) {
    const { id_tipo_pago, id_pago, tipo, comentarios, Fecha } = Pago[ciclospagos];
    console.log(`Elemento ${parseInt(ciclospagos) + 1}:
    id_tipo_pago: ${id_tipo_pago},
    id_pago: ${id_pago},
    tipo: ${tipo},
    comentarios: ${comentarios},
    Fecha: ${Fecha}`);
}

//for of
console.log("Ciclo for of");
let ciclospagos = 1;
for (const { id_tipo_pago, id_pago, tipo, comentarios, Fecha }
    of Pago) {
    console.log(`Elemento ${ciclospagos}:
    id_tipo_pago: ${id_tipo_pago},
    id_pago: ${id_pago},
    tipo: ${tipo},
    comentarios: ${comentarios},
    Fecha: ${Fecha}`);
    ciclospagos++;
}