$(document).ready(function(){

	id = retornaId(5);

	if ( id == undefined ) {
		//se o produto nao existir
		alert('Produto inexistente');
		location.href='index.php';
	} else {

		//recuperar do cache
		produto = localStorage.getItem("produto"+id);

		//verificar se o produto existe no cache
		if ( produto ) {
			//produto do cache
			dados = JSON.parse(produto);
			preencherProduto(dados);
			console.log("Produto carregado do cache");
		} else {
			//produto do json
			$.getJSON("json/produto.php?op=produto&id="+id, function(){
				$(".produto").html("<img src='imagens/load.gif'> Carregando produtos...");
			}).done(function(dados){
				preencherProduto(dados);
				cache = JSON.stringify(dados);
				localStorage.setItem("produto"+id, cache);
				console.log("Produto armazenado no cache");
			}).fail(function(){
				$(".produto").html("Erro ao carregar produto");
			})
		}
	}

})

function preencherProduto(dados) {
	$.each(dados, function( key, val ) {
		//mostrar os dados do produto na tela
		//fazer 2 colunas (4, 8)
		$(".produto").html(`<div class='row'>
			<div class='col s12 m4 center-align'>
				<img src='${val.foto}' alt='${val.nome}' title='${val.nome}' class='responsive-img'>
				<p class='valor'>R$ ${val.valor}</p>
				<p>
					<a href='carrinho/${val.id}/add' class='btn red darken-4'>
						Adicionar ao carrinho
					</a>
				</p>
			</div>
			<div class='col s12 m8 center-align'>
				<h3>${val.nome}</h3>
				${val.descricao}
			</div>
		</div>`);
	})
}