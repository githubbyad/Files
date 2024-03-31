<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../mail/PHPMailer.php';
require '../mail/SMTP.php';
require '../mail/Exception.php';

$mail = new PHPMailer(true);

$setting_mail = new Settings;
$setting_details = $setting_mail->first();

$mail->isSMTP();                                       //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                  //Set the SMTP server to send through
$mail->SMTPAuth   = true;                              //Enable SMTP authentication
$mail->Username   = $setting_details->sender_email;            //SMTP username
$mail->Password   = $setting_details->sender_password;                //SMTP password (see the footer)
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;       //Enable implicit TLS encryption
$mail->Port       = 465;                               //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
$mail->addAddress($setting_details->recipient_email);         //Add a recipient

//Content
$mail->isHTML(true);                                  //Set email format to HTML     



// Generate an App Password for SMTP on Gmail:

// After enabling 2-step verification, proceed to generate an app-specific password:
// In the “Security” section, click on “App passwords” or search it for the top search bar and click on it.
// Provide a custom name for the app, like “SMTP for My Email Client.”
// Click the “Create” button to create a unique 16-character app-specific password.