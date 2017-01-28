var numErro, numAcerto, recorde, nomeRecorde, nome;
var errouSom = new Audio('erro.mp3');
var segundos;

$(document).ready(function(){
	resetar();
	$('#butAcertou').click(function(){
		acertou();
	});
	$('#butErrou').click(function(){
		errou();
	});
	$('#butResetar').click(function(){
		resetar();
	});

	$( "body" ).keypress(function( event ) {
		var letra = event.keyCode;
		switch (letra){
			case 114:
				resetar();
				break;
			case 97:
				acertou();
				break;
			case 101:
				errou();
				break;
			case 112:
				errouSom.play();
				break;
				
			case 116:
				segundos = 10;
				contaTempo();
				break;

			case 109:
				mostrar();
				break;	
		}
		
	});
	
});

function mostrar(){
	$('#ocultar').toggleClass("oculto");
}


function contaTempo(){
	if (segundos > 0){
		$('#aviso').html(segundos);
		setTimeout(function(){segundos--;contaTempo()},1000);
		
	} else {
		$('#aviso').html("Acabou!");
		errouSom.play();
	}
	
	
}


function aviso(texto){
	$('#aviso').html(texto);
	setTimeout(function(){$('#aviso').html("")},3000);
	
}

function resetar(){
	aviso("Início!");
	numErro = 3;
	numAcerto = 0;
	atualizar();
}

function verificar(){
	atualizar();
	if (numErro == 0){
		aviso("Perdeu!");
		errouSom.play();
	}
	
}

function atualizar(){
	$('#numAcerto').html(numAcerto);
	$('#numErro').html(numErro);
}

function acertou(){
	numAcerto++;
	verificar();
	aviso("Acertou!");
}

function errou(){
	numErro--;
	aviso("Errou!");
	verificar();
}

