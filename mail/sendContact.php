<?php 
// Функция для отправки писем с формы "ЗАКАЗАТЬ УСЛУГУ"


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = ''; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ''; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom(''); // От кого будет уходить письмо?
$mail->addAddress(''); // Кому будет уходить письмо

$mail->isHTML(true);
$mail->Subject = 'Aivideo - Выезд заценщика'; // Тема письма
$mail->Body    = 'Пользователь заказал выезд заценщика<br>' .$name. ' - Имя <br>' .$phone. ' - Телефон';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../../index.html');
}
?>