
function autenticar(){
    const login = document.getElementById('usuario').value;

    const senha = document.getElementById('senha').value;

    if(login === 'usuario' && senha === '1234'){
        
        document.getElementById('mensagem').innerHTML="Usuário autenticado com Sucesso!";

    }else {
        document.getElementById('mensagem').innerHTML="Acesso negado!";
    }

}