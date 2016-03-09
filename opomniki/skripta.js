window.addEventListener('load', function() {
	//stran nalozena
		
	var izvediPrijavo = function(event){
	var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector(".pokrivalo").style.display="none";
	document.getElementById('uporabnik').innerHTML=uporabnik;

		
	};
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);
	
	
	var dodajOpomnik = function(){
	var nazivZadolzitve = document.querySelector("#nazivZadolzitve").value;
	var casOpomnika = document.querySelector("#casOpomnika").value;
	
	document.getElementById('naziv_opomnika').innerHTML="";
	document.getElementById('cas_opomnika').innerHTML="";
	document.getElementById('opomnik').innerHTML+="<div class='opomnik'>"
          + "<div class='naziv_opomnika'>NAZIV_OPOMNIKA</div>"
		  +  "<div class='cas_opomnika'> Opomnik čez <span>CAS_OPOMNIKA</span> sekund.</div>"
		  +"</div>"

				
	}
	
	document.querySelector("#dodajGumb").addEventListener('click',dodajOpomnik);
	
	
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	
	
});