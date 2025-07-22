$(document).ready(function () {
    $.ajax({
        url: "data/iestp.json",
        method: "GET",
        dataType: "json",
        success: function (data) {

            $("#institucion").text(data.institucion);
            $("#periodo").text(data.periodo);
            $("#alumno").text(data.alumno);
            $("#ud").text(data.ud)        
        }
    });
    $.ajax({
        url: "data/alumnos.json",
        method: "GET",
        dataType: "json",
        success: function (data) {

            const alumno = data.alumno;

            alumno.forEach(function(alumno){

                    const fila =
                    `<tr>
                    <td>${alumno.dni} </td>
                    <td>${alumno.nombre} </td>
                    <td>${alumno.apellido} </td>
                    <td>${alumno.edad} </td>
                    </tr>
                    `
                    $("#tabla-alumno tbody").append(fila);
            })
                
        }
    });
    $.ajax({
        url: "data/cursos.json",
        method: "GET",
        dataType: "json",
        success: function (data) {


            const curso = data.curso;

            curso.forEach(function(curso){

                    const fila =
                    `<tr>
                    <td>${curso.id_curso} </td>
                    <td>${curso.nombre_curso} </td>
                    <td>${curso.n_horas} </td>
                    </tr>
                    `
                    $("#tabla-curso tbody").append(fila);
            })
                
        }
    });

    $.ajax({
        url: "data/docentes.json",
        method: "GET",
        dataType: "json",
        success: function (data) {


            const docente = data.docente;

            docente.forEach(function(docente){

                    const fila =
                    `<tr>
                    <td>${docente.dni} </td>
                    <td>${docente.nombre} </td>
                    <td>${docente.apellido} </td>
                    <td>${docente.curso} </td>
                    </tr>
                    `
                    $("#tabla-docente tbody").append(fila);
            })
                
        }
    });
});
