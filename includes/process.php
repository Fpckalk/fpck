<?php
	if( isset($_POST) ){  
	  
	    //form validation vars  
	    $formok = true;  
	    $errors = array();  
	  
	    //sumbission data  
	    $ipaddress = $_SERVER['REMOTE_ADDR'];  
	    $date = date('d/m/Y');  
	    $time = date('H:i:s');  
	  
	    //form data  
			$false = $_POST['false'];
	    $name = $_POST['name'];
	    $email = $_POST['email'];   
	    $message = $_POST['message'];  
	  
	  
	    //FORM VALIDATION 
			//validate hidden field is empty
		if(empty($false)){
			
		} else {
			$formok = false;
			$errors[] = "You have not entered a human";
		}
			
	  	//validate name is not empty  
		if(empty($name)){  
		    $formok = false;  
		    $errors[] = "You have not entered a name";
		}		
		//validate email address is not empty  
		if(empty($email)){  
		    $formok = false;  
		    $errors[] = "You have not entered an email address";  
		//validate email address is valid  
		}elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){  
		    $formok = false;  
		    $errors[] = "You have not entered a valid email address";  
		}  
		//validate message is not empty  
		if(empty($message)){  
		    $formok = false;  
		    $errors[] = "You have not entered a message";  
		}
		
		if($formok) {
			$headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			$emailbody = 
				"<p><strong>Name: </strong> {$name} </p>
				<p><strong>E-mail: </strong> {$email} </p>
				<p><strong>Message: </strong> {$message} </p>";
				
			mail("fpckalk@gmail.com", "Message from your portfolio",$emailbody,$headers);
			header ("Location: /");
		} else {
			header ("Location: /");
		}
		
	}
?>