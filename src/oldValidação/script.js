/*

// Validação do Cadastro

// A forma de validação simples que encontrei em meu estudos foi criando uma variavel especificando os caracteres que não poderiam ser utilizados e colocando todos em uma string, e utilizando o propriedade do js .test para efetuar uma validação simples para ver se o conteudo digitado estava com os caracteres corretos. Vale resaltar que este metodo é apenas para simular da funcionabilidade do projeto, para projetos reais e robustos necessita de bibliotecas de validação de formulários mais avançadas ou implementar verificações adicionais no lado do servidor para garantir a segurança.

let user = null
let email = null
let password = null

// Objeto final
let usuario = {
    login: '',
    email: '',
    senha: ''
};

// Variaveis de situação das validações (true ou false)
let userValid = ''
let emailValid = ''
let senhaValid = ''
let senhaConfValid = ''


let btnEfLogin = document.getElementById('btnEfLogin')
let btnEfCadastro = document.getElementById('btnEfCadastro')

btnEfLogin.addEventListener('click', () => { // Usando arronw para treinar usos diferentes
    efetuarLogin()
})


btnEfCadastro.addEventListener('click', function(){
    validateLogin()
    validatePasswordMatch()
    mensagem()
})


// Validação simples de formato do cadastro
function validateLogin() {
    user = document.getElementById('user').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    
    const userRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;
    
    if(!userRegex.test(user)) {
        userValid = false
    }else{
        userValid = true
    }
    
    if (!emailRegex.test(email)) { 
        emailValid = false
    }else{
        emailValid = true
    }
    
    if (!passwordRegex.test(password)) {
        senhaValid = false
    }else{
        senhaValid = true
    }    
    //Essas informações são tratadas pela manipulação de DOM para exibir a mensagem personalizada informando apenas quais são falsas para o usuario. assim podendo rever seu cadastro de forma dinamica sabendo exatamente qual informação esta errada.
}


// Efetua uma validação na senha e confirmação de senha, para identificar se são iguais.
function validatePasswordMatch() {
    password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        senhaConfValid = false
    }else{
        senhaConfValid = true
    }
}

// Exibe informações sobre o cadastro no console para melhor detalhamento dev
function mensagem(){
    
    if(userValid === false) {
        console.log ('User Incorreto')
    } else if(userValid === true){
        console.log ('User Correto')
    }
    
    if(emailValid === false){
        console.log('Email Incorreto')
    } else if(emailValid === true){
        console.log('Email Correto')
    }
    
    if (senhaValid === false){
        console.log('Senha Incorreta')
    } else if(senhaValid === true){
        console.log('Senha Correta')
    }
    
    if(senhaConfValid === false){
        console.log('As senhas não são iguais')
    }else if(senhaConfValid === true){
        console.log('Senhas estão iguais')
    }
    verificarErros()
}

function verificarErros() {
    // Verifica se alguma das condições resultou em false
    if (!userValid || !emailValid || !senhaValid || !senhaConfValid) {
        showAlert(); //Manipulação de DOM do alerta de erro no cadastro
    } else {
        alertOk() //Manipulação de DOM do alerta de OK
        CadastroOk()
        console.log ('Enviando para o banco de dados') //fim do script.js
        iniciarBG() // função que inicia o bando de dados
    }
}

//Cria as informações do objeto usuario para serem enviadas ao ScriptBG apenas as informações necessarias.
function CadastroOk() {
    usuario.login = user;
    usuario.email = email;
    usuario.senha = password;
}

import { iniciarBG } from './scriptBD.js';
import { efetuarLogin }  from './scriptBD.js';
export { alertLoginOk };
export { usuario }; 
//Exportando para que o objeto usuario possa ser tratado no arquivo ScriptBD (Banco de dados) utilizando a ideia de produção por etapas, pois cada parte é tratada em um arquivo destinado ao mesmo.

*/