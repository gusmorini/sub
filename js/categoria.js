$(document).ready(function(){

	id = retornaId(5);

	produtos = localStorage.getItem("categoria"+id);

	if ( produtos ) {
		console.log("Produtos do Cache");
		dados = JSON.parse(produtos);
		preencherProdutos(dados);
	} else{
		console.log("Produtos do JSON");
		$.getJSON("json/produto.php?op=categoria&id="+id,function(){
			$(".produto").html("<img src='imagens/load.gif'> Carregando produtos...");
		}).done(function(dados){
			preencherProdutos(dados);
			cache = JSON.stringify(dados);
			localStorage.setItem("categoria"+id,cache);
		}).fail(function(){
			$(".produto").html("Erro ao carregar produtos");
		})
	}

})