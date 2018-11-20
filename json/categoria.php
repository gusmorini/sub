<?php
	header("Content-Type:application/json");
	//incluir o banco
	include "conexao.php";
	//sql para selecionar as categorias
	$consulta = $pdo->prepare("select * from categoria");
	$consulta->execute();

	while ( $dados = $consulta->fetch(PDO::FETCH_OBJ) ) {
		$categoria[] = array("id"=>$dados->id,
							"categoria"=>$dados->categoria);
	}

	//transformar em json
	echo json_encode($categoria);