var dtpFechaNacimiento;
var salarioNeto;
var valorVivienda;
var solicitud;
var plazo;
var interesAnual;
var nombre;
var email;


function calculaPagoMensual(){

var resultSalario = document.getElementById("SalarioResult");
var resultFinanciar = document.getElementById("ResultFinanciar");
var resultEdad = document.getElementById("ResultEdad");
var dtpFechaNacimiento = document.getElementsByName("fechaNacimiento")[0].value;
fechaNacimiento = new Date(dtpFechaNacimiento);
var getFecha= new Date();
var edad = getFecha.getFullYear() - fechaNacimiento.getFullYear();
var salarioMinimo = document.getElementsByName("SalarioMinimo")[0];

salarioNeto = parseFloat(document.getElementsByName("SalarioNeto")[0].value);
interesAnual = parseFloat(document.getElementsByName("Interes")[0].value);
plazo = parseInt(document.getElementsByName("Plazo")[0].value);
valorVivienda =parseFloat(document.getElementsByName("ValorVivienda")[0].value);
solicitud = parseFloat(document.getElementsByName("Solicitud")[0].value);
nombre = document.getElementsByName("Nombre")[0].value;
email = document.getElementsByName("Correo")[0].value;



 var pagoM = document.getElementsByName("PagoMensual")[0];


    var pagoMens = solicitud * (interesAnual/100) * Math.pow((1+(interesAnual/100)),plazo)
    / Math.pow((1+(interesAnual/100)),plazo) -1;
     pagoM.value = pagoMens;
     salarioMinimo.value = pagoMens / 0.40;

     if (salarioNeto >= (pagoMens / 0.40)) {
        resultSalario.innerHTML = "Monto de salario suficiente para el crédito";
    }
    else {
        resultSalario.innerHTML = "Monto de salario insuficiente";
    }

    if (edad > 22 && edad < 55)
    {
        resultEdad.innerHTML = "Cliente con edad suficiente para crédito";
    }
    else
    {
        resultEdad.innerHTML = "Cliente no califica para crédito por edad";
    }

    var porcentajeFinanciar = valorVivienda/solicitud;
    resultFinanciar.innerHTML=porcentajeFinanciar;
    

guardarLocal();

}

function calculaProyec(){

    var interes = 0;
    var amortiza = 0;
    var htmlTabla = "";
    var saldo = parseFloat(solicitud);
    var table = document.createElement('table');
    
    htmlTabla = "<caption>Proyección de Crédito</caption>";
    htmlTabla += "<tr>";
    htmlTabla += "<th>Periodo</th>";
    htmlTabla += "<th>Pago Mensual</th>";
    htmlTabla += "<th>Interes</th>";
    htmlTabla += "<th>Amortiza</th>";
    htmlTabla += "<th>Saldo</th>";
    htmlTabla += "</tr>";

    //calculo de pago mensual
   
    var pagoMens = solicitud * (interesAnual/100) * Math.pow((1+(interesAnual/100)),plazo)
    / Math.pow((1+(interesAnual/100)),plazo) -1;
	
    for (var i = 1; i <= parseInt(plazo); i++) {
        registro = "";
        interes = pagoINT(parseFloat(interes) / 12, i, parseInt(plazo) * 12, parseFloat(plazo));
        amortiza = pagoMens - interes;
        saldo = saldo - amortiza;
        htmlTabla += "<tr>";
        htmlTabla += "<td>" + i + "</td>";
        htmlTabla += "<td>" + pagoMens.toLocaleString(); + "</td>";
        htmlTabla += "<td>" + interes.toLocaleString(); + "</td>";
        htmlTabla += "<td>" + amortiza.toLocaleString(); + "</td>";
        htmlTabla += "<td>" + saldo.toLocaleString(); + "</td>";
        htmlTabla += "</tr>";

    }
    table.innerHTML = htmlTabla;

    var div = document.getElementById('tblData');
    div.appendChild(table);
}

function guardarLocal() {

    localStorage.setItem("fechaNacimiento", fechaNacimiento);
    localStorage.setItem("salarioNeto", salarioNeto);
    localStorage.setItem("valorVivienda", valorVivienda);
    localStorage.setItem("solicitud", solicitud);
    localStorage.setItem("plazo", plazo);
    localStorage.setItem("interesAnual", interesAnual);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
}
function recuperarLocal() {

    var getlocal = localStorage.getItem("fechaNacimiento");

    if (getlocal != null && getlocal != "" && getlocal != false && getlocal != undefined)
    {
        document.getElementsByName("nombre")[0].value = localStorage.getItem("nombre");
        document.getElementsByName("correo")[0].value = localStorage.getItem("correo");
        document.getElementsByName("fechaNacimiento")[0].value = localStorage.getItem("fechaNacimiento");
        document.getElementsByName("salarioNeto")[0].value = localStorage.getItem("salarioNeto");
        document.getElementsByName("valorVivienda")[0].value = localStorage.getItem("valorVivienda");
        document.getElementsByName("solicitud")[0].value = localStorage.getItem("solicitud");
        document.getElementsByName("plazo")[0].value = localStorage.getItem("plazo");
        document.getElementsByName("interes")[0].value = localStorage.getItem("interes");
        procesarCalculo();
    }
}

function pagoINT(tasa, periodo, nper, montoIni) {

    var montoInteres = 0.00;
    montoInteres = interes(tasa, periodo, pago(tasa, nper, montoIni), montoIni);
    //alert(montoInteres);
    return montoInteres;

}

function pago(tasa, nper, montoIni) {

    var cuotaInicial = 0.00;
    var numerador = 0.00;
    var divisor = 0.00;
    var potencia = 0.00;

    potencia = Math.pow(1 + (tasa / 100), nper);
    numerador = montoIni * (tasa / 100) * potencia;
    divisor = potencia - 1;

    cuotaInicial = numerador / divisor;
    
    return cuotaInicial;
}

function interes(tasaMensual, mes, pagoMensual, montoSolicitado) {

    var vInteres = 0;
    var amortiza = montoSolicitado;

    for (var i = 1; i <= mes; i++)
    {
        vInteres = (amortiza * (tasaMensual / 100));
        amortiza = amortiza - (pagoMensual - vInteres);
    }
    return vInteres;
}


