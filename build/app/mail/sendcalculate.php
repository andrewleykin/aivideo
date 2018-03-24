<?php 
// Подключение переменных
include 'settings.php';

// Функция для отправки писем с формы "ЗАКАЗАТЬ УСЛУГУ"

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$services = $_POST['services'];
$building = $_POST['building'];
$meter = $_POST['meter'];
$totalCost = $_POST['totalCost'];

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
$mail->Subject = 'Aivideo - Заказ с калькулятором'; // Тема письма
$mail->Body    = 'Имя - ' .$name. '<br>Почта этого пользователя - ' .$email. '<br>Телефон - ' .$phone. '<br>Заказанные услуги - ' .$services. '<br>Помещение - ' .$building. '<br>Метраж - ' .$meter. '<br>Итоговая сумма - ' .$totalCost;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../../index.html');
}
?>