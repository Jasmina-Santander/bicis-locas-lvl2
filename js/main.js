
// Variables utilizadas
var a_name	= "";
var lastname	= "";
var email	= "";
var password	="";
var select_bici	= "";

//Funcion para validar formulario
function validateForm(){
	/* primero obtengo el valor de los campos
	del formulario */
	a_name = $('#name').val().trim();
	lastname = $('#lastname').val().trim();
	email = $('#input-email').val().trim();
	password = $('#input-password').val().trim();
	select_bici = $('#select_bici').val().trim();
	
	/* Ahora pruebo 1 a 1 los valores */
		//	Validaciones Nombre
		if (a_name == '') {
			$('#name').parent().append('<span class="name_error">Este campo es obligatorio</span>');
		}else if(validarLetras(a_name) == false){
			$('#name').parent().append('<span class="name_error">El Nombre solo puede contener letras</span>');
		}else if(primeraLetraMayus(a_name) == false){
			$('#name').parent().append('<span class="name_error">El Nombre debe contener la primera letra mayuscula</span>');
		}else{
			// Oculta todos los mensajes de error que tengan la clase .name_error
			$('.name_error').hide("medium");
			// Elimina los mensajes ya ocultos de error en el nombre
			$('.name_error').remove();
		}
		//Validaciones apellido
		if (lastname == '') {
			$('#lastname').parent().append('<span class="lastname_error">Este campo es obligatorio</span>');
		}else if(validarLetras(lastname) == false){
			$('#lastname').parent().append('<span class="lastname_error">El Apellido solo puede contener letras</span>');
		}else if(primeraLetraMayus(lastname) == false){
			$('#lastname').parent().append('<span class="lastname_error">El apellido debe contener la primera letra mayuscula</span>');
		}else{
			// Oculta todos los mensajes de error que tengan la clase .lastname_error
			$('.lastname_error').hide("medium");
			// Elimina los mensajes ya ocultos de error en el apellido
			$('.lastname_error').remove();
		}
		//	Validaciones Email
		if (email == '') {
			$('#input-email').parent().append('<span class="email_error">Este campo es obligatorio</span>');
		}else if(validarMail(email) == false){
			$('#input-email').parent().append('<span class="email_error">El Email no tiene el formato correcto</span>');
		}else{
			// Oculta todos los mensajes de error que tengan la clase .email_error
			$('.email_error').hide("medium");
			// Elimina los mensajes ya ocultos de error en el email
			$('.email_error').remove();
		}
		//	Validaciones contraseña
		if (password == '') {
			$('#input-password').parent().append('<span class="password_error">Este campo es obligatorio</span>');
		}else if(password == 'password'|| password =='123456'|| password =='098754'){
			$('#input-password').parent().append('<span class="password_error">Contraseña invalida</span>');
		}else if(validarTamaño(password) == false){
			$('#input-password').parent().append('<span class="password_error">La contraseña debe contener 6 o + caracteres</span>');	
		}else{
			// Oculta todos los mensajes de error que tengan la clase .password_error
			$('.password_error').hide("medium");
			// Elimina los mensajes ya ocultos de error en la contraseña
			$('.password_error').remove();
		}
		//	Validaciones Select Bici
		if (select_bici == '0') {
			$('#select_bici').parent().append('<span class="bici_error">Debe seleccionar un tipo de Bici</span>');
		}else{
			// Oculta todos los mensajes de error que tengan la clase .bici_error
			$('.bici_error').hide("medium");
			// Elimina los mensajes ya ocultos de error en el select bici
			$('.bici_error').remove();
		}
	
	}

		//	Funciones utilizada, para validar nombre y apellido, que su contenido sea en letras y que la primera letra sea mayuscula :
	
	function validarLetras(a_name, lastname){
		tester =  /^[A-Z]+$/i;
		return tester.test(a_name, lastname);
	}

	function primeraLetraMayus(string){
		primera_letra = string.charAt(0);
		if(primera_letra.toUpperCase() === primera_letra){
			return true;
		}else{
			return false;
		}
	}
	
		//	Funcion utilizada, para validar email, que su formato sea el correcto:

	function validarMail(email){
		tester =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
		return tester.test(email);
	}
		
		//	Funcion utilizada, para validar el minimo de caracteres de una contraseña:

	function validarTamaño(password){
		var minNumberofChars = 6;
		if(password.length < minNumberofChars){
			return false;
		}

	}
