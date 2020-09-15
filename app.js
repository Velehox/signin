"use strict";

const btnSignIn = document.querySelector("#btnSignIn");


btnSignIn.onclick = function() {

const kayttaja = document.querySelector("#kayttaja").value;
const salasana = document.querySelector("#salasana").value;


const henkilo = Henkilo(kayttaja, salasana);
const vastaus = document.querySelector("#vastaus");

vastaus.innerHTML = henkilo.tulostaTiedot();
return false;

}

// Luodaan henkilo-olio
function Henkilo(_kayttaja, _salasana){
    let henkilo = {
        kayttaja: _kayttaja,
        salasana: _salasana,
        
      
        tulostaTiedot(){
        	return `| Kayttajanimi/Sähkoposti: ${this.kayttaja} | Salasana: ${this.salasana} |`;
        }
    }
    return henkilo;
}