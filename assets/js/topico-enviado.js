var botaoenviar = document.getElementById("botao-enviar-topico");
var assunto = document.querySelector(".assunto");
var conteudo = document.querySelector("conteudo");

botaoenviar.addEventListener("click", function() {
  //var topicoedicao = document.getElementById("topico-edit");
  if(botaoenviar.style.display === "block"){
      //topicoedicao.style.display = "none";
      assunto.style.display = "none";
      conteudo.style.display = "none";
  }else{
      //topicoedicao.style.display = "block";
      assunto.style.display = "block";
      conteudo.style.display = "block";
    }
});