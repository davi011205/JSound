let $body =  $('body');
let inputsEl = $('#teste');

inputsEl.click( () => {
    $body.toggleClass('modoClaro');
    $body.toggleClass('modoEscuro');
});
