

function validar()
{

var user = document.getElementById("user").value;
var password = document.getElementById("password").value;
if(user == "administrador" && password == "1234")
{
    alert("correcto");
	document.getElementById("crear").disabled = false;
	document.getElementById("borrar").disabled = false;
	document.getElementById("login").reset();
}

else
{
	document.getElementById("login").reset();
	alert("incorrecto -> si no sabes por gusto es.. C:");
}

}

function cambiar()
{
	
	document.getElementById("marge_derecho").style.display = "none";

}


