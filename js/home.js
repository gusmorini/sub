$(document).ready(function(){
	//produtos do cache
	produtos = localStorage.getItem("produtos");

	$.getJSON("json/produto.php", function(){
		$(".produto").html("<img src='imagens/load.gif'> Carregando produtos");
	}).done(function(dados){
		console.log("Carregando produtos do JSON");
		//jogar os dados no .produto
		preencherProdutos(dados);
		cache = JSON.stringify(dados);
		localStorage.setItem("produtos",dados);
	}).fail(function(){
		console.log("Carregando produtos do Cache");
		dados = JSON.parse(produtos);
		preencherProdutos(dados);
	})

	
})