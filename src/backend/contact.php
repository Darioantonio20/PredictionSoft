<?php
require "../assets/vendor/phpmailer/class.phpmailer.php";
	//instanciamos un objeto de la clase phpmailer al que llamamos 
	//por ejemplo mail
	$mail = new phpmailer();
	
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 0;  // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true;  // authentication enabled
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;
	//Asignamos a Host el nombre de nuestro servidor smtp
	$mail->Host = "mail.predictionsoft.com.mx";
	
	//Le decimos cual es nuestro nombre de usuario y password
	$mail->Username = "system@predictionsoft.com.mx";
	$mail->Password = "P4ssw0rd2021.";
	
	//Indicamos cual es nuestra dirección de correo y el nombre que 
	//queremos que vea el usuario que lee nuestro correo
	$mail->From = 'system@predictionsoft.com.mx';
	
	$mail->FromName = 'Sitio Prediction SOFT';
	
	//Asignamos asunto y cuerpo del mensaje
	//El cuerpo del mensaje lo ponemos en formato html, haciendo 
	//que se vea en negrita
	$mail->Subject = "Mensaje desde la pagina";
		
	$mail->Body = "Hemos recibido el siguiente mensaje de <b>".$_POST['nombre'].":</b>
           <p>
           <b>Asunto: </b>".$_POST['titulo']."
           <br>
           <b>Asunto: </b>".$_POST['mensaje']."	  
           </p>
				   <p>
            Datos de contacto:
            <br>
            Telefono: ".$_POST['telefono']."
            <br>
            Email: ".$_POST['email']."
				   </p>";
	
	//Definimos AltBody por si el destinatario del correo no admite 
	//email con formato html
	$mail->AltBody = "Hemos recibido el siguiente mensaje de ".$_POST['nombre'].":
  
  Asunto: ".$_POST['asunto']."
  
  ".$_POST['mensaje']."	  
  
  
   Datos de contacto:
   
   Telefono: ".$_POST['telefono']."
   
   Email: ".$_POST['email']."
  ";
	
	//el valor por defecto 10 de Timeout es un poco escaso dado que voy a usar 
	//una cuenta gratuita y voy a usar attachments, por tanto lo pongo a 120  
	$mail->Timeout=10;
					
	//Indicamos cuales son las direcciones de destino del correo y enviamos 
	//los mensajes
	$mail->AddAddress("ventas@predictionsoft.com.mx");
	
	//se envia el mensaje, si no ha habido problemas la variable $success 
	//tendra el valor true
	$exito = $mail->Send();
	
	//La clase phpmailer tiene un pequeno bug y es que cuando envia un mail con
	//attachment la variable ErrorInfo adquiere el valor Data not accepted, dicho 
	//valor no debe confundirnos ya que el mensaje ha sido enviado correctamente
	if ($mail->ErrorInfo=="SMTP Error: Data not accepted") {
	   $exito=true;
	 }
		
	if(!$exito)
	{
	   echo "ERROR";
	}
	else
	{
	   echo "OK";
	}

?>