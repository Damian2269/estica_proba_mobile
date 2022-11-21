function inneRadioChecked(id)
{
	$("#"+id).click();
}

function wysunFormularzWyceny(class_name)
{
	
	$("#przerwaFormularzWycena").addClass('hideElement');
	$(".wycenaSamonosne").removeClass('showWycenaFormularz');
	$(".wycenaSchodyNaBeton").removeClass('showWycenaFormularz');
	$(".wycenaInne").removeClass('showWycenaFormularz');
	
	$("."+class_name).addClass('showWycenaFormularz');
	
}

function showBalustradaDiv()
{
	$("#balustradaDiv").removeClass('hideElement');
}

function hideBalustradaDiv()
{
	$("#balustradaDiv").addClass('hideElement');
}

function showBalustradaDiv2()
{
	$("#balustradaDivSamonosne").removeClass('hideElement');
}

function hideBalustradaDiv2()
{
	$("#balustradaDivSamonosne").addClass('hideElement');
}