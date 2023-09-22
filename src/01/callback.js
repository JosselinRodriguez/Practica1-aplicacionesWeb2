function obtenerPagoPorID(id, callback) {
    const pago = pagos.find(p => p.id_pago === id);
    if (pago) {
        callback(null, pago);
    } else {
        callback("Pago no encontrado", null);
    }
}

obtenerPagoPorID(1002, (error, pago) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Pago encontrado por ID:");
        console.log(pago);
    }
});