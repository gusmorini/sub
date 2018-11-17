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
	
	mostraCarrinho();

})

//função para buscar item no carrinho
function buscaItem (carrinho, id) {
	c = 0
	$.each(carrinho, function(key, val){
		if (val.id == id) c++
	})
	console.log("itens: " + c)
	return c
}

//função para mostrar o carrinho
function mostraCarrinho()
{

	console.log("function mostraCarrinho")

	$(".produto").html("carregando...");

	//pegar o carrinho do cache
	carrinho = localStorage.getItem("carrinho");

	if (!carrinho)
	{
		$(".produto").html("não existe nenhum item no seu carrinho");
		console.log("sem produtos no carrinho")
	}
	else
	{
		console.log("mostrando produtos")
		carrinho = JSON.parse ( carrinho );
		$(".produto").html(`<table>
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
			<button type='button' class='btn red darken-4' onclick="limpar()">
				limpar
			</button>

		`);

		//mostrar a linha dos produtos no tbody
		$.each(carrinho, function (key, val){
			$("tbody").append(`<tr id='linha${key}'>
				<td>
					<img src='${val.foto}' width='100px' >
				</td>
				<td>${val.nome}</td>
				<td>${val.valor}</td>
				<td>
					<button type="button" class="btn red darken-4" onclick="remover(${key})">
						<i class="material-icons">remove_shopping_cart</i>
					</button>
				</td>
				</tr>`)
		})
	}
}

//função remove item do carrinho
function remover(id)
{
	if (confirm ("Deseja mesmo excluir?"))
	{
		carrinho = JSON.parse(localStorage.getItem("carrinho"))
		//splice apaga o item dentro do carrinho (array)
		carrinho.splice(id,1)
		carrinho = JSON.stringify(carrinho)
		localStorage.setItem("carrinho", carrinho)
		mostraCarrinho()
		//$("#linha"+id).hide("slow")
	}
}

//função para limpar o carrinho
function limpar()
{
	if(confirm("Realmente limpar o carrinho?"))
	{
		//limpa a variavel do cache
		localStorage.clear("carrinho")
		mostraCarrinho()
	}
}