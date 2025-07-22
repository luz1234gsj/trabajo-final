$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "data1/datos_cursos.xml",
        dataType: "xml"
    }).done((data) => {
        $(data).find('curso').each(function() {
            let fila = $('<tr>')
            fila.append($(`<td>${$(this).find('id_curso').text()}</td>`))
            fila.append($(`<td>${$(this).find('nombre_curso').text()}</td>`)) // ← corregido aquí
            fila.append($(`<td>${$(this).find('n_horas').text()}</td>`))
            $('#cursos tbody').append(fila)
        })
        $('#curso').show()
    })
})
