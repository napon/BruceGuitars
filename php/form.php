<?php
require_once('PHPMailerAutoload.php');

$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "napnaptestemail@gmail.com";
$mail->Password = "coolstorybro";
$mail->Subject = "MESSAGE FROM: " . $_POST["email"];
$mail->Body = $_POST["comments"];

$mail->AddAddress("napnaptestemail@gmail.com");

if(!$mail->Send()) {
	echo "Mailer Error: " . $mail->ErrorInfo;	
}

?>