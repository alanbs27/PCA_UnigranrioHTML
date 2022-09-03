
function mostraMensagem()
{
	alert("clique na imagem para abrir o link");
} 

function lagua()
{
       	 window.open("agua.html");
}
function lenergia()
{
       	 window.open("energia.html");
}
function lreciclagem()
{
       	 window.open("reciclagem.html");
}
function lreflor()
{
       	 window.open("reflorestamento.html");
}

function mostrarElemento(id, visibilidade) {
	document.getElementById(id).style.display = visibilidade;
}



 var teste = 0;
 setInterval(piscar, 500);
 function piscar(){
	if(teste<1){
	  teste++;
	  document.getElementById('au1').style.opacity = '1';
	} else{
	  teste = 0; 
	  document.getElementById('au1').style.opacity = '0';
	}};

