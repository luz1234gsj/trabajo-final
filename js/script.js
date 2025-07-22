async function consultarDNI() {
  const dni = document.getElementById("dni").value;
  const resultado = document.getElementById("resultado-dni");

  const token = "a4c73328a88e1cdc5ba7d29ce895c3058096493d5213844653a3d69cf136c2c6";

  if (dni.length !== 8 || isNaN(dni)) {
    resultado.innerHTML = "<p style='color:red;'>Ingrese un DNI válido de 8 dígitos.</p>";
    return;
  }

  resultado.innerHTML = "Consultando...";

  try {
    const response = await fetch("https://apiperu.dev/api/dni", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ dni: dni })
    });

    const json = await response.json();
    if (!json.success || !json.data) {
      resultado.innerHTML = "<p style='color:red;'>DNI no encontrado o token inválido.</p>";
      return;
    }

    const data = json.data;
    resultado.innerHTML = `
      <p><strong>DNI:</strong> ${data.numero}</p>
      <p><strong>Nombre Completo:</strong> ${data.nombre_completo}</p>
      <p><strong>Nombres:</strong> ${data.nombres}</p>
      <p><strong>Apellido Paterno:</strong> ${data.apellido_paterno}</p>
      <p><strong>Apellido Materno:</strong> ${data.apellido_materno}</p>
      <p><strong>Código de Verificación:</strong> ${data.codigo_verificacion}</p>
    `;
  } catch (error) {
    resultado.innerHTML = "<p style='color:red;'>Error al conectar con la API.</p>";
    console.error(error);
  }
}

async function consultarRUC() {
  const ruc = document.getElementById("ruc").value;
  const resultado = document.getElementById("resultado-ruc");

  const token = "a4c73328a88e1cdc5ba7d29ce895c3058096493d5213844653a3d69cf136c2c6";

  if (ruc.length !== 11 || isNaN(ruc)) {
    resultado.innerHTML = "<p style='color:red;'>Ingrese un RUC válido de 11 dígitos.</p>";
    return;
  }

  resultado.innerHTML = "Consultando...";

  try {
    const response = await fetch("https://apiperu.dev/api/ruc", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ ruc: ruc })
    });

    const json = await response.json();
    if (!json.success || !json.data) {
      resultado.innerHTML = "<p style='color:red;'>RUC no encontrado o token inválido.</p>";
      return;
    }

    const data = json.data;
    resultado.innerHTML = `
      <p><strong>RUC:</strong> ${data.ruc}</p>
      <p><strong>Razón Social:</strong> ${data.nombre_o_razon_social}</p>
      <p><strong>Estado:</strong> ${data.estado}</p>
      <p><strong>Condición:</strong> ${data.condicion}</p>
      <p><strong>Dirección:</strong> ${data.direccion_completa || 'No disponible'}</p>
      <p><strong>Departamento:</strong> ${data.departamento || 'No disponible'}</p>
      <p><strong>Provincia:</strong> ${data.provincia || 'No disponible'}</p>
      <p><strong>Distrito:</strong> ${data.distrito || 'No disponible'}</p>
      <p><strong>¿Buen Contribuyente?:</strong> ${data.es_buen_contribuyente ?? 'No disponible'}</p>
      <p><strong>¿Agente de Retención?:</strong> ${data.es_agente_de_retencion ?? 'No disponible'}</p>
    `;
  } catch (error) {
    resultado.innerHTML = "<p style='color:red;'>Error al conectar con la API.</p>";
    console.error(error);
  }
}
