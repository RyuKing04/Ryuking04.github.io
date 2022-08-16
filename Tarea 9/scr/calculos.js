$(document).ready(function(){
    $(document.getElementById("paisRegion")).hide();
})

window.onload = cargarPantalla();

function MensajeTipoSeguro() {
    var seguroSeleccionado = document.getElementById("seguro");
    let texto = seguroSeleccionado.options[seguroSeleccionado.selectedIndex].innerText;
    switch (texto) {
        case "Protección Básica Obligatoria (PBO)":
            alert("Protección Básica Obligatoria (PBO)\nCubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito.\nCosto de alquiler diario: $ 5.45 por día.");
            break;
        case "Protección Extendida de Daños(PED)":
            alert("Protección Extendida de Daños(PED)\nCubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones.\nCosto de alquiler diario: $ 9.50 por día.");
            break;
        case "Protección Gasto Médicos(PGM)":
            alert("Protección Gasto Médicos(PGM)\nCubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes del vehículo.\nCosto de alquiler diario: $ 11.25 por día.");
            break;
    }
}

function btnCalcular() {

    document.getElementById("numeroDias").value = calculoDias();
    document.getElementById("tarifaDiaria").value = tarifaDiaria();
    document.getElementById("total").value = totalAPagar();

}

function calculoDias() {

    restaFechas = function (f1, f2) {
        var aFecha1 = f1.split('/');
        var aFecha2 = f2.split('/');
        var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]);
        var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1] - 1, aFecha2[0]);
        var dif = fFecha2 - fFecha1;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias;
    }

    var diaDev = new Date(document.getElementById("dev").value);
    diaDev = diaDev.getDate() + "/" + diaDev.getMonth() + "/" + diaDev.getFullYear();
    var diaRetiro = new Date(document.getElementById("retiro").value);
    diaRetiro = diaRetiro.getDate() + "/" + diaRetiro.getMonth() + "/" + diaRetiro.getFullYear();

    var diasDiferencia = restaFechas(diaRetiro, diaDev);

    return diasDiferencia;
}

function tarifaDiaria() {
    let valorVehiculo = document.getElementById("tipoVehiculo").value * calculoDias();
    let valorSeguro = document.getElementById("seguro").value * calculoDias();

    let totalValor = Number.parseFloat(valorVehiculo) + Number.parseFloat(valorSeguro);

    if (calculoDias() > 365 && calculoDias() < 3) {
        alert("La cantidad de días no son correctos");
    }

    if (calculoDias() > 30 && calculoDias() < 120) {
        totalValor = totalValor - (totalValor * 15) / 100;
    }

    if (calculoDias() >= 120 && calculoDias() <= 365) {
        totalValor = totalValor - (totalValor * 25) / 100;
    }

    return totalValor;
}

function llamarRegion(){

    let valorCCA3 = document.getElementById("nacionalidad").value;
    var paisRegion = "";

    $.getJSON("https://restcountries.com/v3.1/alpha?codes=" + valorCCA3 + "", data => {

    paisRegion = data[0].region;

    return paisRegion;

    });

}

function totalAPagar(){

    var montoTotal = tarifaDiaria() * calculoDias() - ((tarifaDiaria() * calculoDias()) * aplicarDescuentoTotalPagar());

    return montoTotal;

}

function aplicarDescuentoTotalPagar(){
    var porcentajeDescuento = 0;
    switch(llamarRegion()){
        case "Americas":
        case "Europe":
            porcentajeDescuento = .1;
            break;
        case "Africa":
            porcentajeDescuento = .05;
            break;
    }

    return porcentajeDescuento;
}

function guardarMemoriaLocal(fechaRetiro, fechaDevolucion, pais, carro, seguro) {
    var registrar = {fechaRetiro, fechaDevolucion, pais, carro, seguro};

    /*let regis = {
        fretiro : fechaRetiro,
        fdevolucion : fechaDevolucion,
        nacion : pais,
        tipoCarro : carro,
        tipoSeguro : seguro
    };*/

    if (typeof (Storage) !== undefined) {
        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        var arreglo = new Array();
        if (memRegistro == null) {
            arreglo[0] = registrar;
        } else {
            arreglo = memRegistro;
        }
        localStorage.setItem("memRegistro", JSON.stringify(arreglo));
    }

}   

function cargarPantalla()
    {
    
        if (typeof (Storage) !== "undefined") {
            
            var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
            if (memRegistro != null)
            {
                document.getElementById('retiro').value = memRegistro[0].fechaRetiro;
                document.getElementById('dev').value = memRegistro[0].fechaDevolucion;
                document.getElementById('tipoVehiculo').value = memRegistro[0].carro;
                document.getElementById('seguro').value = memRegistro[0].seguro;
            }        
        }
    }