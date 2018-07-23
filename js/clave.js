	function acceso (){
	var clave;
	var clavevalida = '12345';
	clave = prompt ('Introduce la contraseña');
		if (clave==clavevalida){
		window.location.href="www.google.com";
		}
		else {
		alert ('la contraseña no es correcta.');
		}
	}