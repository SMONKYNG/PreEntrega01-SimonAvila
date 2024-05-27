//1.- variables CHECK
//2.- condicionales CHECK
//3.- ciclos CHECK
//4.- función


const IVA = 0.19;
const envioNormal = 4000;
const envioExpress = 10000;
const DctoCliente = 0.1;

let codProducto = parseInt(prompt("Ingresa el código del producto a comprar 🕶️\n1-Lentes de descanso, $25.990 (sin IVA)\n2-Lentes ópticos, $36.990 (sin IVA)\n3-Lentes de Sol, $29.990 (sin IVA)\n4-Lentes ópticos de sol, $42.990 (sin IVA)\n0-Finalizar compra 🙅🏼‍♂️"));
let totalProducto = 0;

while (codProducto != 0){
    switch (codProducto) {
        case 1:
            totalProducto += 25990;
            alert("Agregaste Lentes de descanso a tu carrito, total de tu compra $"+totalProducto+" (sin IVA)");
            break;
        case 2:
            totalProducto += 36990;
            alert("Agregaste Lentes ópticos a tu compra, total de tu compra $"+totalProducto+" (sin IVA)");
            break;
        case 3:
            totalProducto += 29990;
            alert("Agregaste Lentes de sol a tu compra, total de tu compra $"+totalProducto+" (sin IVA)");
            break;
        case 4:
            totalProducto += 42990;
            alert("Agregaste Lentes de ópticos de sol a tu compra, total de tu compra $"+totalProducto+" (sin IVA)");
            break;
        default:
            alert("Código inválido, intenta nuevamente 🐶");
            break;
    }

    codProducto = parseInt(prompt("Ingresa el código del producto a comprar 🕶️\n1-Lentes de descanso, $25.990\n2-Lentes ópticos, $36.990\n3-Lentes de Sol, $29.990 \n4-Lentes ópticos de sol, $42.990\n0-Finalizar Compra 🙅🏼‍♂️"));
}

let tipoEnvio = parseInt(prompt("🛒 El total de tu compra es $"+totalProducto+" (sin IVA) \nEl valor del despacho normal es de $4.000 y el despacho Express de $10.000, También puedes retirar sin costo adicional en nuestra tienda ubicada en la calle MarkBarker 182, Nepal.\n1- Incluir despacho normal \n2-Despacho Express\n3-Retiro en Tienda"));

if(tipoEnvio == 1){
    alert("💰 Total a pagar $"+valorFinal(IVA,envioNormal)+" con IVA Incluido");
}else if(tipoEnvio == 2){
    alert("💰 Total a pagar $"+valorFinal(IVA,envioExpress)+" con IVA Incluido");
}else if(tipoEnvio == 3){
    alert("💰 Total a pagar $"+valorFinal(IVA,0)+" con IVA Incluido");
}

function valorFinal(impuesto,despacho){
    let totalConImpuestos = totalProducto * (1 + impuesto);
    let totalFinal;
    if(despacho != 0){
        totalFinal = totalConImpuestos + despacho;
    }else{
        totalFinal = totalConImpuestos;
    }
return totalFinal;
}

