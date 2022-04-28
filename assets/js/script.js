//Resumo expandido
var links = document.querySelectorAll(".Secaoresumo > .txt-more");


for(var i = 0, j = links.length; i < j; i++){
	links[0].onclick = function() {
		var container = this.parentNode.querySelector(".container");
		container.classList.toggle("partial");
		this.classList.toggle("txt-more");	

		var secResumo = document.getElementById("Secaoresumo");
		secResumo.style.height = "460px";
	};
}

