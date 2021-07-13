<?php

// подключаем скрипт
require_once 'data_connect_db.php'; 
  
// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
		or die("Ошибка " . mysqli_error($link));

// выполняем операции с базой данных
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['massage'])) {
	
  $name = $_POST['name'];
	$email = $_POST['email'];
  $subject = $_POST['subject'];
	$massage = $_POST['massage'];

	$query = "INSERT INTO faifly_contact (name, email, subject, massage) VALUES ('$name', '$email', '$subject', '$massage')";
	$result = mysqli_query($link, $query); 

	$project_name = "faifly";
  $admin_email  = "faifly@faifly.zzz.com.ua";
  $form_subject = "Новое сообщение с сайта faifly";
  $message_post .= "<tr style='background-color: #f8f8f8;'>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>name</td>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>$name</td>
              </tr>
              <tr style='background-color: #f8f8f8;'>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>from</td>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>$email</td>
              </tr>
              <tr style='background-color: #f8f8f8;'>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>subject</td>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>$subject</td>
              </tr>
              <tr style='background-color: #f8f8f8;'>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>massage</td>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>$massage</td>
              </tr>";

  $message_post = "<table style='width: 100%;'>$message_post</table>";

  function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
  }

  $headers = "MIME-Version: 1.0" . PHP_EOL .
  "Content-Type: text/html; charset=utf-8" . PHP_EOL .
  'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
  'Reply-To: '.$admin_email.'' . PHP_EOL;

  mail($admin_email, adopt($form_subject), $message_post, $headers ); 

  echo json_encode($_POST, JSON_UNESCAPED_UNICODE);
}

// закрываем подключение
mysqli_close($link);
?>