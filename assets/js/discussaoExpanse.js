var pergunta = document.getElementById("pergunta2");
var respostasVisiveis = document.getElementById("4respostas");
var secDiscussao = document.getElementById("Secao-discussoes");
var footer = document.getElementById("footer");

respostasVisiveis.addEventListener("click", function() {
	var respostasId = document.getElementById("respostasId");

	if (respostasId.style.display === "none"){
		respostasId.style.display = "block";
		footer.style.display = "none";
	}else{
		respostasId.style.display = "none";
		footer.style.display = "block";
		footer.style.margin = "465px 0 0 225px;";
	}
});