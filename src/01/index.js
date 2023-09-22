const { buscarPago } = require("./arreglo")
const { Pago } = require("./arreglo")
buscarPago(5, Pago, (err, pago) => {
    if (err) {
        console.log(err); // error: no se encontro el elemento con id=5
    } else {
        console.log("El pago es:", pago);
    }
});


const { buscarServicio } = require("./array");

const { servicio_adicional } = require("./array");

buscarServicio(3, servicio_adicional, (error, servicio_adicional) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Servicio encontrado:', servicio_adicional);
    }
});