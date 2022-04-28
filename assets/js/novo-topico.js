//Evento de criacao do topico
var discussoes = document.getElementById("Discussoes-Compartilhar");
var secDiscussao = document.getElementById("Secao-discussoes");
var criar = document.getElementById("botaoTopico");
var footer = document.getElementById("footer");

criar.addEventListener("click", function() {
	var topico = document.getElementById("topico-edit");

	if(topico.style.display === "none"){
		topico.style.display = "block";
		discussoes.style.display = "none";
		secDiscussao.style.height = "700px";
		footer.style.display = "none";
	}else{
		topico.style.display = "none";
		discussoes.style.display = "block";
		footer.style.display = "block";
	}
});