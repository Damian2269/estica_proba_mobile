$(window).on("load", function() {
			$('.loadingLogo').addClass('loadingLogoAnimancja');
			$('.rozjasnianieWejscie').addClass('rozjasnianieAnimacja');
				$('.menuContainer').addClass('menuNaDol');
			

				
			});

			
//---------------------wysuwanie okna zadaj pytanie------------------------
			
var czy_wysuniete=false;
			
function wysunFormularz()
{
	if(!czy_wysuniete)
	{
		$('.zadajPytanieContainer').addClass('zadajPytanieAnimacja');
		/*$('.websiteContainer').addClass('websiteContainerZadajPytanieAnimation');*/
		czy_wysuniete=true;
		canYouScroll=false;
	}
	else
	{
		$('.zadajPytanieContainer').removeClass('zadajPytanieAnimacja');
		/*$('.websiteContainer').removeClass('websiteContainerZadajPytanieAnimation');*/
		czy_wysuniete=false;
		canYouScroll=true;
	}
}
    
	
function showWyslano()
{
	$('.wyslanoAnimacja').addClass('dodajAnimWyslano');
}
	

