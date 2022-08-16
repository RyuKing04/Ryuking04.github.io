function mostrarTodo() {
    let tipoCarro = document.getElementById("tipoVehiculo");
    let valorVehiculo = tipoCarro.value;

    if (valorVehiculo == "Compacto") {
        $("#imgVista").prop("src", "./images/Compacto1.png");
        document.getElementById("infTCar").innerHTML = "<h2>KIA PICANTO</h2><span>Año 2016</span>";
        $('#img1').prop("src", "./images/Compacto1.png");
        $('#img2').prop("src", "./images/Compacto2.png");
        $('#img3').prop("src", "./images/Compacto3.png");
    }
    if (valorVehiculo == "Mediano") {
        $("#imgVista").prop("src", "../images/Mediano1.png");
        document.getElementById("infTCar").innerHTML = "<h2>HONDA CITY CAR</h2><span>Año 2017</span>";
        $('#img1').prop("src", "./images/Mediano1.png");
        $('#img2').prop("src", "./images/Mediano2.png");
        $('#img3').prop("src", "./images/Mediano3.png");
    }
    if (valorVehiculo == "Terreno") {
        $("#imgVista").prop("src", "./images/TodoTerreno1.png");
        document.getElementById("infTCar").innerHTML = "<h2>TOYOTA FJ CRUISER</h2><span>Año 2016</span>";
        $('#img1').prop("src", "./images/TodoTerreno1.png");
        $('#img2').prop("src", "./images/TodoTerreno2.png");
        $('#img3').prop("src", "./images/TodoTerreno3.png");
    }
    if (valorVehiculo == "Familiar") {
        $("#imgVista").prop("src", "./images/Familiar1.png");
        document.getElementById("infTCar").innerHTML = "<h2>TOYOTA SIENNA</h2><span>Año 2018</span>";
        $('#img1').prop("src", "./images/Familiar1.png");
        $('#img2').prop("src", "./images/Familiar2.png");
        $('#img3').prop("src", "./images/Familiar3.png");
    }

}

function mostrarImagen(valor) {
    let tipoCarro = document.getElementById("tipoVehiculo");
    let valorVehiculo = tipoCarro.value;

    if (valorVehiculo == "Compacto") {
        switch (valor) {
            case 1:
                $("#imgVista").prop("src", "./images/Compacto1.png");
                document.getElementById("infTCar").innerHTML = "<h2>KIA PICANTO</h2><span>Año 2016</span>";
                break;
            case 2:
                $("#imgVista").prop("src", "./images/Compacto2.png");
                document.getElementById("infTCar").innerHTML = "<h2>FORD FIESTA ST</h2><span>Año 2015</span>";
                break;
            case 3:
                $("#imgVista").prop("src", "./images/Compacto3.png");
                document.getElementById("infTCar").innerHTML = "<h2>PEUGEOT 308</h2><span>Año 2018</span>";
                break;
        }
    }
    if (valorVehiculo == "Mediano") {
        switch (valor) {
            case 1:
                $("#imgVista").prop("src", "./images/Mediano1.png");
                document.getElementById("infTCar").innerHTML = "<h2>HONDA CITY CAR</h2><span>Año 2017</span>";
                break;
            case 2:
                $("#imgVista").prop("src", "./images/Mediano2.png");
                document.getElementById("infTCar").innerHTML = "<h2>MERCEDES SLS</h2><span>Año 2015</span>";
                break;
            case 3:
                $("#imgVista").prop("src", "./images/Mediano3.png");
                document.getElementById("infTCar").innerHTML = "<h2>FORD FIESTA ST</h2><span>Año 2016</span>";
                break;
        }
    }
    if (valorVehiculo == "Terreno") {
        switch (valor) {
            case 1:
                $("#imgVista").prop("src", "./images/TodoTerreno1.png");
                document.getElementById("infTCar").innerHTML = "<h2>TOYOTA FJ CRUISER</h2><span>Año 2016</span>";
                break;
            case 2:
                $("#imgVista").prop("src", "./images/TodoTerreno2.png");
                document.getElementById("infTCar").innerHTML = "<h2>TOYOTA Prado</h2><span>Año 2018</span>";
                break;
            case 3:
                $("#imgVista").prop("src", "./images/TodoTerreno3.png");
                document.getElementById("infTCar").innerHTML = "<h2>NISSAN JUKE</h2><span>Año 2017</span>";
                break;
        }
    }
    if (valorVehiculo == "Familiar") {
        switch (valor) {
            case 1:
                $("#imgVista").prop("src", "./images/Familiar1.png");
                document.getElementById("infTCar").innerHTML = "<h2>TOYOTA SIENNA</h2><span>Año 2018</span>";
                break;
            case 2:
                $("#imgVista").prop("src", "./images/Familiar2.png");
                document.getElementById("infTCar").innerHTML = "<h2>DODGE GRAND CARAVANE</h2><span>Año 2015</span>";
                break;
            case 3:
                $("#imgVista").prop("src", "./images/Familiar3.png");
                document.getElementById("infTCar").innerHTML = "<h2>HYUNDAI ELANTRA</h2><span>Año 2016</span>";
                break;
        }
    }
    
}
