$(document).ready(function(){

	//mascara de carregamento
	$(".load").fadeOut("slow", function(){
		$(".load").hide();
	})

	//acionar o menu responsivo
	$(".sidenav").sidenav();

	dadosCategoria = localStorage.getItem("categorias");

	if ( dadosCategoria ) {
		//se existir algo no localStorage
		console.log("Categorias do Cache");
		//string em json
		dados = JSON.parse(dadosCategoria);
		//preencher o menu
		preencherCategoria(dados);
	} else{
		console.log("Categorias do JSON");
		//importar as categorias do JSON
		$.getJSON("json/categoria.php", function(){
			$("#msg").html("<p><img src='imagens/load.gif'> Carregando categorias...</p>");
		}).done(function(dados){			
			//se deu certo, devolve os dados

			//tranformar o json em string
			cache = JSON.stringify(dados);
			//guardar os dados no cache
			localStorage.setItem("categorias",cache);
			//chamo a funcao para preencher o menu
			preencherCategoria(dados);
		}).fail(function(){
			//se deu erro mostrar mensagem
			$("#msg").html("Erro ao carregar categorias");
		}) //fail
	} //fim do if

	//funcao para preencher os menus
	function preencherCategoria(dados) {
		$.each(dados, function (key,val) {
			$("#mobile-demo,#menu,#footer").prepend("<li><a href='categoria/"+val.id+"'>"+val.categoria+"</a></li>");
		})
		//apagar a mensagem do #msg
		$("#msg").html('');
	}

})


//funcao paga pegar o id
function retornaId(pos) {
	pagina = window.location.href;
	//console.log("Página: "+pagina);
	p = pagina.split("/");
	console.log("Posição: " + p[pos] );
	return p[pos];
}

//funcao para preencher os produtos
function preencherProdutos(dados) {
	$(".produto").html("");
	$.each(dados, function (key,val) {
		$(".produto").append(`<div class='col l3 m6 s12 center-align'>
				<div class='card'>
				<img src='${val.foto}' class='responsive-img'>
				<p>${val.nome}</p>
				<p class='valor'>R$ ${val.valor}</p>
				<a href='produto/${val.id}' class='btn red darken-4'>Detalhes</a>
				</div>
			</div>`);
	});
}