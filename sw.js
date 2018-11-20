self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('subsubmarino').then(function(cache) {
     return cache.addAll([
       'index.php',
       'css/materialize.min.css',
       'css/style.css',
       'js/home.js',
       'js/carrinho.js',
       'js/categoria.js',
       'js/materialize.min.js',
       'js/produto.js',
       'js/jquery-3.3.1.min.js',
       'imagens/icon.png'
     ]);
   })
 );
});
