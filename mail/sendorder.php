<?php 
// Функция для отправки писем с формы "ЗАКАЗАТЬ УСЛУГУ"


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$services = $_POST['services'];

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
$mail->Subject = 'Aivideo - Заказать услугу'; // Тема письма
$mail->Body    = '' .$name. ' - Имя <br>' .$email. ' - Почта этого пользователя<br>' .$phone. ' - Телефон<br>' .$services. ' - Заказанная услуга';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../../index.html');
}
?>