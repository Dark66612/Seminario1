// Creación de la Máquina
class MaquinaExpendedora {
  constructor() {
    this.p1 = new Producto("10", "Papa Margarita", 1700);
    this.p2 = new Producto("20", "Jugo Hit", 2400);
    this.p3 = new Producto("30", "Chocolatina Jet", 700);
    this.p4 = new Producto("40", "Galletas Festival", 1000);
    this.p5 = new Producto("50", "Jugo Hit", 2000);
    this.p6 = new Producto("60", "Choclitos", 2200);
  }

  darProducto1() {
    // Retorna el producto 1
    return this.p1;
  }
  darProducto2() {
    // Retorna el producto 2
    return this.p2;
  }

  darProducto3() {
    // Retorna el producto 3
    return this.p3;
  }
  darProducto4() {
    // Retorna el producto 4
    return this.p4;
  }
  darProducto5() {
    // Retorna el producto 4
    return this.p5;
  }
  darProducto6() {
    // Retorna el producto 4
    return this.p6;
  }

  abastecerProducto1(pUnidades) {
    //Invoca al metodo abastecer de la clase Producto
    this.p1.abastecer(pUnidades);
  }

  abastecerProducto2(pUnidades) {
    //Invoca al metodo abastecer de la clase Producto
    this.p2.abastecer(pUnidades);
  }

  abastecerProducto3(pUnidades) {
    //Invoca al metodo abastecer de la clase Producto
    this.p3.abastecer(pUnidades);
  }
  abastecerProducto4(pUnidades) {
    //Invoca al metodo abastecer de la clase Producto
    this.p4.abastecer(pUnidades);
  }
  abastecerProducto5(pUnidades) {
    //Invoca al metodo abastecer de la clase Producto
    this.p5.abastecer(pUnidades);
  }
  abastecerProducto6(pUnidades) {
    //Invoca al metodo abastecer de la clase Producto
    this.p6.abastecer(pUnidades);
  }

  venderProducto1() {
    // Vender unidades del producto 1
    if (this.p1.darCantidadUnidadesDisponibles() > 0) {
      // Verifica si hay unidades disponibles del producto 1
      // Y si esto es asi, se vende 1 unidad
      this.p1.vender();
    } else {
      // Si no hay unidades se envia un mensaje de alerta
      alert("No hay unidades del producto");
    }
  }

  venderProducto2() {
    // Vender unidades del producto 1
    if (this.p2.darCantidadUnidadesDisponibles() > 0) {
      // Verifica si hay unidades disponibles del producto 1
      // Y si esto es asi, se vende 1 unidad
      this.p2.vender();
    } else {
      // Si no hay unidades se envia un mensaje de alerta
      alert("No hay unidades del producto");
    }
  }

  venderProducto3() {
    // Vender unidades del producto 1
    if (this.p3.darCantidadUnidadesDisponibles() > 0) {
      // Verifica si hay unidades disponibles del producto 1
      // Y si esto es asi, se vende 1 unidad
      this.p3.vender();
    } else {
      // Si no hay unidades se envia un mensaje de alerta
      alert("No hay unidades del producto");
    }
  }

  venderProducto4() {
    // Vender unidades del producto 1
    if (this.p4.darCantidadUnidadesDisponibles() > 0) {
      // Verifica si hay unidades disponibles del producto 1
      // Y si esto es asi, se vende 1 unidad
      this.p4.vender();
    } else {
      // Si no hay unidades se envia un mensaje de alerta
      alert("No hay unidades del producto");
    }
  }
  venderProducto5() {
    // Vender unidades del producto 1
    if (this.p5.darCantidadUnidadesDisponibles() > 0) {
      // Verifica si hay unidades disponibles del producto 1
      // Y si esto es asi, se vende 1 unidad
      this.p5.vender();
    } else {
      // Si no hay unidades se envia un mensaje de alerta
      alert("No hay unidades del producto");
    }
  }
  venderProducto6() {
    // Vender unidades del producto 1
    if (this.p6.darCantidadUnidadesDisponibles() > 0) {
      // Verifica si hay unidades disponibles del producto 1
      // Y si esto es asi, se vende 1 unidad
      this.p6.vender();
    } else {
      // Si no hay unidades se envia un mensaje de alerta
      alert("No hay unidades del producto");
    }
  }

  darCantidadTotalVentas() {
    let cantidadTotal =
      this.p1.darCantidadUnidadesVendidas() +
      this.p2.darCantidadUnidadesVendidas() +
      this.p3.darCantidadUnidadesVendidas() +
      this.p4.darCantidadUnidadesVendidas() +
      this.p5.darCantidadUnidadesVendidas() +
      this.p6.darCantidadUnidadesVendidas();

    return cantidadTotal;
  }

  darValorTotalVentas() {
    let valorVentas =
      this.p1.darCantidadUnidadesVendidas() * this.p1.darPrecio() +
      this.p2.darCantidadUnidadesVendidas() * this.p2.darPrecio() +
      this.p3.darCantidadUnidadesVendidas() * this.p3.darPrecio() +
      this.p4.darCantidadUnidadesVendidas() * this.p4.darPrecio() +
      this.p5.darCantidadUnidadesVendidas() * this.p5.darPrecio() +
      this.p6.darCantidadUnidadesVendidas() * this.p6.darPrecio();

    return valorVentas;
  }
}

// ----------------------------------------------------

// Creación de la clase Producto
class Producto {
  constructor(id, nombre, precio) {
    //Crear el constructor de la clase Producto
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidadUnidadesDisponibles = 0;
    this.cantidadUnidadesVendidas = 0;
  }

  darIdentificador() {
    //Metodo que retorna el id del producto
    return this.id;
  }

  darNombre() {
    //Metodo que retorna el nombre del producto
    return this.nombre;
  }

  darPrecio() {
    // Metodo que retorna el precio de un producto
    return this.precio;
  }

  darCantidadUnidadesDisponibles() {
    // Metodo que retorna las unidades disponibles del producto
    return this.cantidadUnidadesDisponibles;
  }

  darCantidadUnidadesVendidas() {
    // Metodo que retorna las unidades vendidas
    return this.cantidadUnidadesVendidas;
  }

  abastecer(pUnidades) {
    // Metodo que abastece un producto
    this.cantidadUnidadesDisponibles =
      this.cantidadUnidadesDisponibles + pUnidades;
  }

  vender() {
    //Metodo que vende un producto(quita disponibles, suma ventas)
    this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles - 1;
    this.cantidadUnidadesVendidas = this.cantidadUnidadesVendidas + 1;
  }
}

let m = new MaquinaExpendedora();

function abastacer_papas() {
  let cant = prompt("Ingrese el número de unidades que abastecerá el producto");
  m.abastecerProducto1(parseInt(cant));
  let disponible = m.darProducto1().darCantidadUnidadesDisponibles();
  document.getElementById("disp_papa").innerHTML = "Disponible: " + disponible;
}

function abastacer_jugo() {
  let cant = prompt("Ingrese el número de unidades que abastecerá el producto");
  m.abastecerProducto2(parseInt(cant));
  let disponible = m.darProducto2().darCantidadUnidadesDisponibles();
  document.getElementById("disp_jugo").innerHTML = "Disponible: " + disponible;
}

function abastacer_choco() {
  let cant = prompt("Ingrese el número de unidades que abastecerá el producto");
  m.abastecerProducto3(parseInt(cant));
  let disponible = m.darProducto3().darCantidadUnidadesDisponibles();
  document.getElementById("disp_choco").innerHTML = "Disponible: " + disponible;
}

function abastacer_galleta() {
  let cant = prompt("Ingrese el número de unidades que abastecerá el producto");
  m.abastecerProducto4(parseInt(cant));
  let disponible = m.darProducto4().darCantidadUnidadesDisponibles();
  document.getElementById("disp_galleta").innerHTML =
    "Disponible: " + disponible;
}

function abastacer_tostiempanada() {
  let cant = prompt("Ingrese el número de unidades que abastecerá el producto");
  m.abastecerProducto5(parseInt(cant));
  let disponible = m.darProducto5().darCantidadUnidadesDisponibles();
  document.getElementById("disp_tostiempanada").innerHTML =
    "Disponible: " + disponible;
}

function abastacer_choclito() {
  let cant = prompt("Ingrese el número de unidades que abastecerá el producto");
  m.abastecerProducto6(parseInt(cant));
  let disponible = m.darProducto6().darCantidadUnidadesDisponibles();
  document.getElementById("disp_choclito").innerHTML =
    "Disponible: " + disponible;
}

function comprando_papas() {
  /*
  No hay disponibilidad del producto
  */
  let cant_disp;
  cant_disp = m.darProducto1().darCantidadUnidadesDisponibles(); //maquina m. funcion dar producto

  if (cant_disp <= 0) {
    alert("El producto se encuentra agotado");
  } else {
    /*
  Si hay disponibilidad del producto
  */
    m.venderProducto1(); // restar una unidad
    let disponibilidad = m.darProducto1().darCantidadUnidadesDisponibles(); // consultar disponibilidad
    document.getElementById("disp_papa").innerHTML =
      "Disponibles: " + disponibilidad; //
  }
}

function comprando_jugo() {
  /*
  No hay disponibilidad del producto
  */
  let cant_disp;
  cant_disp = m.darProducto2().darCantidadUnidadesDisponibles(); //maquina m. funcion dar producto

  if (cant_disp <= 0) {
    alert("El producto se encuentra agotado");
  } else {
    /*
  Si hay disponibilidad del producto
  */
    m.venderProducto2(); // restar una unidad
    let disponibilidad = m.darProducto2().darCantidadUnidadesDisponibles(); // consultar disponibilidad
    document.getElementById("disp_jugo").innerHTML =
      "Disponibles: " + disponibilidad; //
  }
}

function comprando_choco() {
  /*
  No hay disponibilidad del producto
  */
  let cant_disp;
  cant_disp = m.darProducto3().darCantidadUnidadesDisponibles(); //maquina m. funcion dar producto

  if (cant_disp <= 0) {
    alert("El producto se encuentra agotado");
  } else {
    /*
  Si hay disponibilidad del producto
  */
    m.venderProducto3(); // restar una unidad
    let disponibilidad = m.darProducto3().darCantidadUnidadesDisponibles(); // consultar disponibilidad
    document.getElementById("disp_choco").innerHTML =
      "Disponibles: " + disponibilidad; //
  }
}

function comprando_galleta() {
  /*
  No hay disponibilidad del producto
  */
  let cant_disp;
  cant_disp = m.darProducto4().darCantidadUnidadesDisponibles(); //maquina m. funcion dar producto

  if (cant_disp <= 0) {
    alert("El producto se encuentra agotado");
  } else {
    /*
  Si hay disponibilidad del producto
  */
    m.venderProducto4(); // restar una unidad
    let disponibilidad = m.darProducto4().darCantidadUnidadesDisponibles(); // consultar disponibilidad
    document.getElementById("disp_galleta").innerHTML =
      "Disponibles: " + disponibilidad; //
  }
}

function comprando_tostiempanada() {
  /*
  No hay disponibilidad del producto
  */
  let cant_disp;
  cant_disp = m.darProducto5().darCantidadUnidadesDisponibles(); //maquina m. funcion dar producto

  if (cant_disp <= 0) {
    alert("El producto se encuentra agotado");
  } else {
    /*
  Si hay disponibilidad del producto
  */
    m.venderProducto5(); // restar una unidad
    let disponibilidad = m.darProducto5().darCantidadUnidadesDisponibles(); // consultar disponibilidad
    document.getElementById("disp_tostiempanada").innerHTML =
      "Disponibles: " + disponibilidad; //
  }
}

function comprando_choclito() {
  /*
  No hay disponibilidad del producto
  */
  let cant_disp;
  cant_disp = m.darProducto6().darCantidadUnidadesDisponibles(); //maquina m. funcion dar producto

  if (cant_disp <= 0) {
    alert("El producto se encuentra agotado");
  } else {
    /*
  Si hay disponibilidad del producto
  */
    m.venderProducto6(); // restar una unidad
    let disponibilidad = m.darProducto6().darCantidadUnidadesDisponibles(); // consultar disponibilidad
    document.getElementById("disp_choclito").innerHTML =
      "Disponibles: " + disponibilidad; //
  }
}

function cantidad_ventas(){
  //generar un alert con la cantidad de ventas de todos los productos
  alert('La cantidad de ventas de la maquina es: ' + m.darCantidadTotalVentas()); 
}

function total_ventas(){
  //generar un alert con la cantidad de ventas de todos los productos
  alert('Total de ventas de la maquina es: ' + m.darValorTotalVentas()); 
}

function unidades_vendidas(){
  //crear variables para mostrar cuanto se vendio de cada cosa
  let ven_papa = m.darProducto1().darCantidadUnidadesDisponibles();
  let ven_jugo = m.darProducto2().darCantidadUnidadesDisponibles();
  let ven_choco = m.darProducto3().darCantidadUnidadesDisponibles();
  let ven_galleta = m.darProducto4().darCantidadUnidadesDisponibles();
  let ven_tostiempanada = m.darProducto5().darCantidadUnidadesDisponibles();
  let ven_choclito = m.darProducto6().darCantidadUnidadesDisponibles();
  alert("La cantidad de unidades vendidas por producto es: \n Papa: " + ven_papa + "\n Jugo: " + ven_jugo + "\n Chocolatina: " + ven_choco +"\n Galleta: " + ven_galleta + "\n Tostiempanadas: " + ven_tostiempanada +"\n Choclito: " + ven_choclito );

}