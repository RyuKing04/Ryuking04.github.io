$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "https://restcountries.com/v3.1/all",
        dataType: "json",

        success: function (data) {

            $.each(data, function (i, pais) {
                var cca3 = pais.cca3;
                var nombrePais = pais.name.common;
                if (nombrePais === "Costa Rica") {
                    let fila1 = "<option value='" + cca3 + "' selected='selected' onClick='regMemoriaLocal(" + cca3 + ")'>" + nombrePais + "</option>";
                    $(".search>#nacionalidad").append(fila1);
                }
                var fila = "<option value='" + cca3 + "' onClick='regMemoriaLocal(" + cca3 + ")'>" + nombrePais + "</option>";
                $(".search>#nacionalidad").append(fila);
            })

        }
    });
    
});

function regMemoriaLocal(valor) {
    if (typeof (Storage) !== undefined) {
        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        var arreglo = new Array();
        if (memRegistro == null) {
            arreglo[0] = valor;
        } else {
            arreglo = memRegistro;
        }
        localStorage.setItem("memRegistro", JSON.stringify(arreglo));
    }

    function cargarPantalla() {

        if (typeof (Storage) !== "undefined") {

            var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
            if (memRegistro != null) {
                $.ajax({
                    type: "get",
                    url: "https://restcountries.com/v3.1/all",
                    dataType: "json",

                    success: function (data) {

                        $.each(data, function (i, pais) {
                            let cca3_1 = pais.cca3;
                            let nombrePais1 = pais.name.common;
                            if (nombrePais1 === "Costa Rica") {
                                let fila1 = "<option value='" + cca3_1 + "' selected='selected' onClick='regMemoriaLocal(" + cca3_1 + ")'>" + nombrePais1 + "</option>";
                                $(".search>#nacionalidad").append(fila1);
                            }
                            let fila1 = "<option value='" + cca3_1 + "' onClick='regMemoriaLocal(" + cca3_1 + ")'>" + nombrePais1 + "</option>";
                            $(".search>#nacionalidad").append(fila1);
                        })

                    }
                });
            }
        }
    }
}