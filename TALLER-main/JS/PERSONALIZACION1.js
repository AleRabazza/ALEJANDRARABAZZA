document.addEventListener('DOMContentLoaded', () => {
    // Añadir evento a cada checkbox de frutas
    document.querySelectorAll('input[name="frutas"]').forEach(checkbox => {
        checkbox.addEventListener('change', actualizarFrutas);
    });
});

function actualizarFrutas() {
    const frutas = document.querySelectorAll('input[name="frutas"]:checked');
    const checkboxes = document.querySelectorAll('input[name="frutas"]');
    
    // Habilitar o deshabilitar los checkboxes según el número de frutas seleccionadas
    if (frutas.length >= 3) {
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                checkbox.disabled = true;
            }
        });
    } else {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;
        });
    }
}

function visualizarPedido() {
    const vinoBase = document.querySelector('input[name="vinoBase"]:checked');
    const frutas = document.querySelectorAll('input[name="frutas"]:checked');
    const edulcorante = document.querySelector('input[name="edulcorante"]:checked');
    const licor = document.querySelector('input[name="licor"]:checked');
    const hierba = document.querySelector('input[name="hierba"]:checked');
    const cantidadBotellas = document.getElementById('cantidadVino').value;

    if (!vinoBase || frutas.length < 1 || frutas.length > 3 || !edulcorante || !licor || !hierba || !cantidadBotellas) {
        alert("Por favor, completa todos los campos correctamente. Asegúrate de seleccionar al menos una fruta y no más de tres.");
        return;
    }

    // Mostrar la vista previa del pedido
    let vistaPreviaHTML = `<h4>Vista Previa de tu Pedido</h4>
        <p><strong>Vino Base:</strong> ${vinoBase.value}</p>
        <p><strong>Frutas Seleccionadas:</strong> ${Array.from(frutas).map(f => f.value).join(', ')}</p>
        <p><strong>Edulcorante:</strong> ${edulcorante.value}</p>
        <p><strong>Licor:</strong> ${licor.value}</p>
        <p><strong>Hierba:</strong> ${hierba.value}</p>
        <p><strong>Cantidad de Botellas:</strong> ${cantidadBotellas}</p>`;
    
    document.getElementById('vistaPrevia').innerHTML = vistaPreviaHTML;
    document.getElementById('vistaPrevia').style.display = 'block';
    document.getElementById('botones-accion').style.display = 'block';
}

function cancelarPedido() {
    // Limpiar el formulario
    document.querySelectorAll('input[name="vinoBase"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="frutas"]').forEach(el => {
        el.checked = false;
        el.disabled = false; // Asegúrate de habilitar nuevamente los checkboxes
    });
    document.querySelectorAll('input[name="edulcorante"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="licor"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="hierba"]').forEach(el => el.checked = false);
    document.getElementById('cantidadVino').value = '';
    document.getElementById('vistaPrevia').innerHTML = '';
    document.getElementById('vistaPrevia').style.display = 'none';
    document.getElementById('botones-accion').style.display = 'none';
    document.getElementById('detalle-pedido').style.display = 'none';
}

function aceptarPedido() {
    // Mostrar la sección de selección de fecha y tipo de envío
    document.getElementById('detalle-pedido').style.display = 'block';
}

function enviarPedido() {
    const fechaEntrega = document.getElementById('fechaEntrega').value;
    const tipoEnvio = document.getElementById('tipoEnvio').value;

    if (!fechaEntrega || !tipoEnvio) {
        alert("Por favor, selecciona la fecha de entrega y el tipo de envío.");
        return;
    }

    alert("Gracias por tu compra");
    cancelarPedido(); // Opcional: Limpiar el formulario después de enviar
}
