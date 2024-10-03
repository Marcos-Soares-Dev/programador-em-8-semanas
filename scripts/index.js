const script_do_google = 'https://script.google.com/macros/s/AKfycbycn5UpSHkiyEauatR50josK0J1IX0AqLDZKCWo5-U/dev'
const dados_do_formulario = document.forms[`formulario-contato`];

dados_do_formulario.addEventListener("submit",function (e) {
    e.preventDefault();

    fetch(script_do_google, {method: "POST", body: new FormData(dados_do_formulario)})
    .then(response => {
        alert("Dados salvos com sucesso",response);
        dados_do_formulario.reset();
    }).catch(error => 
        console.error(`Erro ao salvar as informações`,error)
    )
    
});