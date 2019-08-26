<?php 

$user_name = $_POST['user_name'];
$user_phone = $_POST['user_phone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'test.sender@email.ru'; // логин с которого письмо будет отправляться
$mail->Password = 'password'; // пароль ящика с которого письмо будет отправляться
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
 
$mail->setFrom('test.sender@email.ru', 'Иван Иванов (тест)'); // от кого письмо и его заголовок
$mail->addAddress('test.recipient@email.com'); // кому письмо
$mail->isHTML(true);

$mail->Subject = 'Новая заявка на сайте'; // тело письма
$mail->Body    = 'Имя пользователя: ' . $user_name . 
'<br>Телефон пользователя: ' . $user_phone;
$mail->AltBody = '';

$mail->send();

?>