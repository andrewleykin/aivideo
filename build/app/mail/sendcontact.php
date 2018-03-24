<?php 
// Подключение переменных
include 'settings.php';

// Функция для отправки писем с формы "ЗАКАЗАТЬ УСЛУГУ"

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['email'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = $myUsername; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = $myUserpassword; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom($myUsername); // От кого будет уходить письмо?
$mail->addAddress($myAddress); // Кому будет уходить письмо

$mail->isHTML(true);
$mail->Subject = 'Aivideo - Выезд заценщика'; // Тема письма
$mail->Body    = 'Пользователь заказал выезд заценщика<br>Имя - ' .$name. '<br>Телефон - ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../../index.html');
}
?>