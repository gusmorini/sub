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

function fechar() {
	$("#app").fadeOut("slow", function(){
		$("#app").hide();
	})
}

//verificar se o navegador da suporte a service worker
if ( "serviceWorker" in navigator ) {
	navigator.serviceWorker.register("sw.js").then(function(){
		console.log("Service Worker registrado");
	})
} else {
	console.log("Este navegador não suporta Service Worker");
}


let deferredPrompt;
const addBtn = document.querySelector('.add-button');
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});



