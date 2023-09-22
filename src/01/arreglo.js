const Pago = [{
        "id_tipo_pago": 1,
        "id_pago": 1001,
        "tipo": "Tarjeta",
        "comentarios": "Pago de quinceañera",
        "Fecha": "2023-09-20"
    },
    {
        "id_tipo_pago": 2,
        "id_pago": 1002,
        "tipo": "Efectivo",
        "comentarios": "Compra de graduacion",
        "Fecha": "2023-09-21"
    },
    {
        "id_tipo_pago": 3,
        "id_pago": 1003,
        "tipo": "Transferencia",
        "comentarios": "Pago de Homenaje",
        "Fecha": "2023-09-22"
    },
    {
        "id_tipo_pago": 4,
        "id_pago": 1004,
        "tipo": "Cheque",
        "comentarios": "Pago de Cumpleaños",
        "Fecha": "2023-09-23"
    },
    {
        "id_tipo_pago": 5,
        "id_pago": 1005,
        "tipo": "Transferencia",
        "comentarios": "Pago de Aniversario",
        "Fecha": "2023-09-24"
    },
];
const buscarPago = (id_tipo_pago, arreglo, callback) => {
    const pagoencontrado = arreglo.find((elemento) => {
        return elemento.id_tipo_pago === id_tipo_pago;
    });
    if (pagoencontrado) {
        callback(null, pagoencontrado);
    } else {
        callback("No pudimos encontrar el id_tipo_Pago")
    }
};
module.exports = {
    buscarPago,
    Pago
};