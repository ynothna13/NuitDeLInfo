$(document).ready(function(){
	$("#choixCritereFinition").hide();
	$("#choixCritereUtilisation").hide();
	$("#choixCritereBudget").hide();
	$("#choixCritereAccessibilite").hide();
	$("#choixCritereSituation").hide();
	$("#choixCritereSexe").hide();
	$("#choixCritereConduite").hide();
	$("#choixCritereAge").hide();
	$("#choixCritereOrigine").hide();
	$("#choixCritereTransmission").hide();
	
	
	
	
	function calculStep(slide){
		if(slide<500){
			var value = 0;
			return value = 40*slide;
		}
		else if(slide>=500){
			var value = 0;
			return value = 160*slide-60000;
		}
		
	}
	
	document.getElementById('prix').onchange=function(){
		var value = document.getElementById('prix').value;
		document.getElementById('afficherPrix').innerHTML = calculStep(value) + ' €';
	}
		
	
	var compteur = 0;
	
	function afficheCritere() {
		if(compteur == 0) {
			document.getElementById('listeCritere').innerHTML = "Choisissez vos critères et prenez le volant...";
		}
		else if(compteur == 1) {
			document.getElementById('listeCritere').innerHTML = "Votre critère : ";
		}
		else {
			document.getElementById('listeCritere').innerHTML = "Vos critères : ";
		}
	}
	
	afficheCritere();
	
	$('#critereFinition')
		.hover(function() {
		  $('#choixCritereFinition').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereFinition').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="finitionChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(13);
		$("#critere").append('<input type="hidden" id="FcritereFinition" name="critereFinition" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleFinition'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereFinition").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleFinition"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(14);
			$("#FcritereFinition").remove();
			$("#motCleFinition"+elem).remove();
			$("#critereFinition").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
	
	$('#critereUtilisation')
		.hover(function() {
		  $('#choixCritereUtilisation').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereUtilisation').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="utilisationChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(16);
		$("#critere").append('<input type="hidden" id="FcritereUtilisation" name="critereUtilisation" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleUtilisation'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereUtilisation").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleUtilisation"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(17);
			$("#FcritereUtilisation").remove();
			$("#motCleUtilisation"+elem).remove();
			$("#critereUtilisation").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
	
	$('#critereBudget')
		.hover(function() {
		  $('#choixCritereBudget').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereBudget').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	
	$('#critereAccessibilite')
		.hover(function() {
		  $('#choixCritereAccessibilite').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereAccessibilite').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="accessibiliteChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(18);
		$("#critere").append('<input type="hidden" id="FcritereAccessibilite" name="critereAccessibilite" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleAccessibilite'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereAccessibilite").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleAccessibilite"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(19);
			$("#FcritereAccessibilite").remove();
			$("#motCleAccessibilite"+elem).remove();
			$("#critereAccessibilite").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
	
	
	$('#critereSituation')
		.hover(function() {
		  $('#choixCritereSituation').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereSituation').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="situationChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(14);
		$("#critere").append('<input type="hidden" id="FcritereSituation" name="critereSituation" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleSituation'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereSituation").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleSituation"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(15);
			$("#FcritereSituation").remove();
			$("#motCleSituation"+elem).remove();
			$("#critereSituation").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
	
	$('#critereConduite')
		.hover(function() {
		  $('#choixCritereConduite').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereConduite').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="conduiteChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(13);
		$("#critere").append('<input type="hidden" id="FcritereConduite" name="critereConduite" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleConduite'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereConduite").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleConduite"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(14);
			$("#FcritereConduite").remove();
			$("#motCleConduite"+elem).remove();
			$("#critereConduite").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
	
	$('#critereSexe')
		.hover(function() {
		  $('#choixCritereSexe').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereSexe').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="sexeChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(9);
		$("#critere").append('<input type="hidden" id="FcritereSexe" name="critereSexe" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleSexe'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereSexe").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleSexe"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(10);
			$("#FcritereSexe").remove();
			$("#motCleSexe"+elem).remove();
			$("#critereSexe").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
	
	$('#critereAge')
		.hover(function() {
		  $('#choixCritereAge').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereAge').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="ageChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(8);
		$("#critere").append('<input type="hidden" id="FcritereAge" name="critereAge" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleAge'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereAge").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleAge"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(9);
			$("#FcritereAge").remove();
			$("#motCleAge"+elem).remove();
			$("#critereAge").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
	
	$('#critereOrigine')
		.hover(function() {
		  $('#choixCritereOrigine').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereOrigine').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="origineChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(12);
		$("#critere").append('<input type="hidden" id="FcritereOrigine" name="critereOrigine" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleOrigine'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereOrigine").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleOrigine"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(13);
			$("#FcritereOrigine").remove();
			$("#motCleOrigine"+elem).remove();
			$("#critereOrigine").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
	
	
	$('#critereTransmission')
		.hover(function() {
		  $('#choixCritereTransmission').stop(true, true).effect('slide', {direction:"down",mode: 'show' }, 400);
		}
		, function() {
		  $('#choixCritereTransmission').stop(true, true).effect('slide', {direction:"down",mode: 'hide' }, 400);
		});
	$('[id^="transmissionChoix"]').click(function(){
		var elem = $(this).attr('id');
		var elem = elem.substring(17);
		$("#critere").append('<input type="hidden" id="FcritereTransmission" name="critereTransmission" value="'+elem+'"/>')
		$("#motCle").append('<li id="motCleTransmission'+elem+'"class="cursor_link">'+elem+', </li>');
		$("#critereTransmission").effect('slice', {direction:"down",mode: 'hide' }, 400);
		compteur++;
		afficheCritere();
		$('[id^="motCleTransmission"]').click(function(){
			var elem = $(this).attr('id');
			var elem = elem.substring(18);
			$("#FcritereTransmission").remove();
			$("#motCleTransmission"+elem).remove();
			$("#critereTransmission").effect('slice', {direction:"down",mode: 'show' }, 400);
			compteur--;
			afficheCritere();
		});
	});
});
