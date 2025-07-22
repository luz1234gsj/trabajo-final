$(document).ready(()=>{
    $.ajax({
        type: "GET", //RECIBIR INFORMACION
        url: "data1/datos_docentes.xml", //DE DONDE - RUTA
        dataType: "xml" //TIPO DE DATO (ARCHIVO)
    }).done((data) => {
        $(data).find('docente').each(
            function(){
                let fila = $('<tr>')
                fila.append($(`<td>${$(this).find('dni').text()}</td>`))
                fila.append($(`<td>${$(this).find('nombre').text()}</td>`))
                fila.append($(`<td>${$(this).find('apellido').text()}</td>`))
                fila.append($(`<td>${$(this).find('curso').text()}</td>`))
                $('#docentes tbody').append(fila)
            })
            $('#docente').show()
    })
})