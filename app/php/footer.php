<?php

// подключаем скрипт
require_once 'data_connect_db.php'; 
  
// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
		or die("Ошибка " . mysqli_error($link));

// выполняем операции с базой данных
if (isset($_POST['subscribe'])) {
	
  $subscribe = $_POST['subscribe'];

	$query = "INSERT INTO faifly_footer (subscribe) VALUES ('$subscribe')";
	$result = mysqli_query($link, $query); 

  echo json_encode($_POST, JSON_UNESCAPED_UNICODE);
}

// закрываем подключение
mysqli_close($link);
?>