// ==UserScript==
// @name         Auto Cadastro Completo com Ramal 2
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Cadastro automatizado com base na planilha de ramais CREDINORTE
// @author       Patrão Alex
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

   const dados = [
    { "ramal": "1430", "nome": "DAI", "login": "1430", "senha": "Ramal@1430", "email": "ramal1430@12credinorte.com.br", "linha": "4736335923" },
    { "ramal": "4000", "nome": "Agencia 17", "login": "4000", "senha": "Ramal@4000", "email": "ramal4000@12credinorte.com.br", "linha": "4733715583" },
    { "ramal": "4001", "nome": "Agencia 17", "login": "4001", "senha": "Ramal@4001", "email": "ramal4001@12credinorte.com.br", "linha": "4733715583" },
    { "ramal": "4002", "nome": "Agencia 17", "login": "4002", "senha": "Ramal@4002", "email": "ramal4002@12credinorte.com.br", "linha": "4733715583" }
]



    let index = 0;
    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function preencherCampos() {
        if (index >= dados.length) {
            console.log("✅ Todos os cadastros foram finalizados!");
            return;
        }

        const item = dados[index];
        console.log(`➡️ Cadastrando ${item.nome} (${item.ramal})`);

        // Etapa 1: Clique no botão de adicionar
        const addBtn = [...document.querySelectorAll('mat-icon')].find(e => e.textContent.trim() === "add_circle_outline");
        if (!addBtn) return console.error("❌ Botão de adicionar não encontrado.");
        addBtn.click();
        await delay(1000);

        // Nome (firstName) = Ramal
        document.querySelector('input[formcontrolname="firstName"]').value = item.ramal;
        document.querySelector('input[formcontrolname="firstName"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Sobrenome (lastName) = Nome
        document.querySelector('input[formcontrolname="lastName"]').value = item.nome;
        document.querySelector('input[formcontrolname="lastName"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Login = Ramal
        document.querySelector('input[formcontrolname="username"]').value = item.ramal;
        document.querySelector('input[formcontrolname="username"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Email
        document.querySelector('input[formcontrolname="email"]').value = item.email;
        document.querySelector('input[formcontrolname="email"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Senha
        document.querySelector('input[formcontrolname="password"]').value = item.senha;
        document.querySelector('input[formcontrolname="password"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Seletor "Plano de Perfil"
        document.querySelector('mat-select[formcontrolname="profilePlanId"]').click();
        await delay(500);
        const options = document.querySelectorAll('mat-option');
        if (options[3]) options[3].click(); // terceira opção = advanced
        else console.warn("⚠️ Opção 'advanced' não encontrada.");
        await delay(500);

        // Botão "Próximo"
        const btnProximo = [...document.querySelectorAll('span.mat-button-wrapper')].find(el => el.textContent.trim() === "Próximo");
        if (btnProximo) btnProximo.click();
        await delay(1000);

        // DDD
        document.querySelector('input[formcontrolname="areaCode"]').value = "47";
        document.querySelector('input[formcontrolname="areaCode"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Número
        document.querySelector('input[formcontrolname="number"]').value = item.ramal;
        document.querySelector('input[formcontrolname="number"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Senha novamente
        document.querySelector('input[formcontrolname="extensionPassword"]').value = item.senha;
        document.querySelector('input[formcontrolname="extensionPassword"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Abrir painel "Recursos Extras" baseado no texto do título
const headers = [...document.querySelectorAll('mat-expansion-panel-header')];
const painelExtras = headers.find(h =>
    h.innerText.includes("Recursos Extras")
);

if (painelExtras && painelExtras.getAttribute('aria-expanded') === 'false') {
    painelExtras.click();
    await delay(700); // aguarda o painel abrir
}

// Agora tenta encontrar o campo callerid
const callerIdInput = document.querySelector('input[formcontrolname="callerid"]');
if (callerIdInput) {
    callerIdInput.focus();
    callerIdInput.value = item.linha;
    callerIdInput.dispatchEvent(new Event('input', { bubbles: true }));
    console.log(`✅ Linha preenchida com ${item.linha}`);
} else {
    console.warn("⚠️ Campo 'callerid' não encontrado (talvez painel não abriu corretamente).");
}


        // Botão final "Salvar"
        const btnSalvar = [...document.querySelectorAll('span.mat-button-wrapper')].find(el => el.textContent.trim() === "Salvar");
        if (btnSalvar) btnSalvar.click();
        else console.warn("⚠️ Botão 'Salvar' não encontrado");

        index++;
        await delay(2500);
        preencherCampos();
    }

    window.addEventListener('load', () => {
        setTimeout(() => {
            preencherCampos();
        }, 3000);
    });
})();
