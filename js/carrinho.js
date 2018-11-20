$(document).ready(function(){


	//recuperar a opcao
	op = retornaId(6);
	if ( op == "add" ) {

		console.log("Adicionando produto ao carrinho");
		//recuperar o id
		id = retornaId(5);

		produto = JSON.parse( localStorage.getItem("produto"+id) );

		if ( !produto ) {

			$.getJSON("json/produto.php?op=produto&id="+id, function(){
				$(".produto").html("<img src='imagens/load.gif'> Carregando produto...");
			}).done(function(dados){
				cache = JSON.stringify(dados);
				localStorage.setItem("produto"+id,cache);
				produto = JSON.parse( cache );
			}).fail(function(){
				$(".produto").html("Erro ao carregar produto");
			})
		}

		//carrinho
		
		carrinho = JSON.parse ( localStorage.getItem("carrinho"));
		if ( !carrinho ) {
			//iniciar carrinho
			carrinho = [];
		} 

		$.each(produto, function( key, val ) {
			//verificar se já existe este item no carrinho
			c = buscaItem(carrinho, val.id);
			if ( c == 0 ){
				//guardar item no carrinho
				console.log("Item adicionado ao carrinho: "+val.nome);

				//criar um item produto para inserir no carrinho
				p = {
					id: val.id,
					nome: val.nome,
					foto: val.foto,
					valor: val.valor
				};
				//adicionar o p ao carrinho
				carrinho.push(p);
				localStorage.setItem("carrinho", JSON.stringify(carrinho));

			} else {
				//já tem o item no carrinho
				alert('O item já foi adicionado ao carrinho');
			}
		})
	}
	console.log("Chamar carrinho");
	mostraCarrinho();
})

//funcao para buscar item no carrinho
function buscaItem(carrinho,id) {
	c = 0;
	$.each(carrinho, function ( key, val ){
		if ( val.id == id ) c++;
	})
	console.log("Itens: "+c);
	return c;
}

//função para mostrar o carrinho
function mostraCarrinho() {

	$(".produto").html("<img src='imagens/load.gif'> Carregando carrinho de compras");

	//pegar o carrinho do cache
	carrinho = localStorage.getItem("carrinho");

	if ( !carrinho ) {

		console.log("Sem produtos no carrinho");
		$(".produto").html("Não existe nenhum item no seu carrinho");

	} else {

		console.log("Mostrando produtos");
		carrinho = JSON.parse( carrinho );
		$(".produto").html(`<h2>Carrinho</h2><table>
			<thead>
				<tr>
					<td>Foto</td>
					<td>Nome</td>
					<td>Valor</td>
					<td>Excluir</td>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
		<p>
			<button type='button' class='btn red darken-4' onclick='limpar()'>Limpar Carrinho</button>
		</p>`);

		//mostrar as linhas dos produtos no tbody
		$.each(carrinho, function ( key, val ){
			$("tbody").append(`<tr id='linha${key}'>
					<td><img src='${val.foto}' width='100px'></td>
					<td>${key} ${val.nome}</td>
					<td>R$ ${val.valor}</td>
					<td>
						<button type='button' class='btn red darken-4' onclick='remover(${key})'><i class='material-icons'>remove_shopping_cart</i></button>
					</td>
				</tr>`);
		})

	}

}

//funcao para remover item do carrinho
function remover(id) {
	if ( confirm ( "Deseja mesmo excluir?") ){
		console.log("Excluir Produto "+id);
		carrinho = JSON.parse( localStorage.getItem("carrinho") );
		carrinho.splice(id, 1);
		carrinho = JSON.stringify( carrinho );
		localStorage.setItem("carrinho", carrinho);
		mostraCarrinho();
		//$("#linha"+id).hide("fast");
	}
}

//funcao para apagar o carrinho
function limpar() {
	if ( confirm ( "Deseja mesmo limpar o carrinho?" ) ) {
		//limpa esta variavel do cache
		localStorage.clear("carrinho");
		mostraCarrinho();
	}
}