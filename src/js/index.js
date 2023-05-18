/*

O que precisamos fazer? - Quabndo clicarmos no botão de troca de tema, temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

- objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
    - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
    - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
    - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
    - passo 4 - adicionar a classe modo-escuro no body
    - passo 5 - trocar a imagem do botão de alterar tema para lua

- objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar o modo claro e mudar a imagem para o sol
    - passo 6 - verificar se o body já tem a classe modo-escuro
    - passo 7 -  remover a classe do modo-escuro no body
    - passo 8 - trocar a imagem do botão de alterar tema pra sol

*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png");
  }
});
