$(document).ready(function(){
	calcularDiaAtual();
});

function calcularDiaAtual(){
	var nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
	var dia,mes,ano,data;
	data = new Date();
	dia = data.getDate();
	mes = data.getMonth();
	ano = data.getFullYear();
	$('#dataAtual').html(dia + " de " + nomeMes[mes] + " de " + ano);
}