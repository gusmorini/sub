<?php
	//criar conexão com o banco
	// $servidor = "172.16.1.215";
	// $usuario = "1234";
	// $senha = "1234";
	// $banco = "1234_pwa";

	$servidor = "127.0.0.1";
	$usuario = "user";
	$senha = "userpass";
	$banco = "pwa";

	try {
		$pdo = new PDO("mysql:host=$servidor;dbname=$banco;charset=utf8",$usuario,$senha);
	} catch (PDOException $erro) {
		echo "Erro ao conectar: ".$erro->getMessage();
		exit;
	}