interface Pago {
    id_tipo_pago: number;
    id_pago: number;
    tipo: string;
    comentarios: string;
    Fecha: number;
  }

  const Pago = [] = [
    {
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
  
  function displayServicesWithForEach(): void {
    console.log('Recorriendo forEach:');
    Pago.forEach((Pagos, index) => {
      console.log(`[${index}] id_tipo_pago: ${Pagos.id_tipo_pago}, id_pago: ${Pagos.id_pago}, tipo: ${Pagos.tipo}, comentarios: ${Pagos.comentarios}, Fecha: ${Pagos.Fecha}`);
     });
  }
  
  function displayServicesWithForIn(): void {
    console.log('Recorriendo for in:');
    for (const index in Pago) {
      const Pagos = Pago[index];
      console.log(`[${index}] id_tipo_pago: ${Pagos.id_tipo_pago}, id_pago: ${Pagos.id_pago}, tipo: ${Pagos.tipo}, comentarios: ${Pagos.comentarios}, Fecha: ${Pagos.Fecha}`); 
    }
  }
  
  function displayServicesWithForOf(): void {
    console.log('Recorriendo for of:');
    let index = 0;
    for (const Pagos of Pago) {
        console.log(`[${index}] id_tipo_pago: ${Pagos.id_tipo_pago}, id_pago: ${Pagos.id_pago}, tipo: ${Pagos.tipo}, comentarios: ${Pagos.comentarios}, Fecha: ${Pagos.Fecha}`); 
      index++;
    }
  }
  
  displayServicesWithForEach();
  displayServicesWithForIn();
  displayServicesWithForOf();



 