<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'info@berlinsummit.com';
	$subject = 'berlin-talent-summit.com Website Contact Form';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Message successfully sent. We will get in touch with you ASAP.';
    }
	else{
		$res['message'] = 'Failed to send mail. Please mail us to info@berlinsummit.com.';
	}

	// rambodrahmani@yahoo.it copy
	$to      = 'rambodrahmani@yahoo.it';
	$subject = 'berlin-talent-summit.com Website Contact Form';
	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	$status = mail($to, $subject, $message, $headers);
	
	
	echo json_encode($res);
}

?>