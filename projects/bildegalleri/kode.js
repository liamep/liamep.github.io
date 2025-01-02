// Finner id til html elementene og setter navn på de (Variabel-navn)
let bilde = document.getElementById("bilde");
let bildeInfo = document.getElementById("bildeInfo");
let bildehastighet = document.getElementById("bildehastighet");
let slider = document.getElementById("slider");
let pauseKnapp = document.getElementById("pause");
let hastighet = document.getElementById("hastighet");

//Alle navnene på bildene
let bildeGalleri = [
  "Båt2.png",
  "Dråpe.png",
  "Fart.png",
  "Foss_i_stordalen.png",
  "hytte.png",
  "blad.png" ,
  "røde_bær.png" ,
  "blomst.png" ,
];

//Alle bildetekstene
let bildeTekst = [
  "Bildet viser en forlatt båt ved vannkanten, med en høstlig fjellside og en foss i bakgrunnen. Brennvidden på 35mm gir et balansert perspektiv som inkluderer både forgrunnen og bakgrunnen. Lukkertiden på 1/8 sekund skaper en jevn refleksjon i vannet. Blenderåpningen på f/22 gir en stor dybdeskarphet som sikrer at både båten og fjellet fremstår klart. ISO 100 ble brukt for å minimere støy og gi best mulig bildekvalitet. De manuelle innstillingene sørget for kontroll over eksponeringen, og den lyse himmelen gir en fin kontrast til det mørkere landskapet.",
  "Bildet viser dråper som treffer en vannoverflate i en panne, med fokus på detaljene i ringene og dråpenes bevegelse. En brennvidde på 85mm ble brukt for å få en tett komposisjon. Lukkertiden på 1/8000 sekund fanger øyeblikket perfekt, noe som krever mye lys. For å oppnå dette ble ISO 6400 brukt, kombinert med fire lamper for tilstrekkelig belysning. Blenderen på f/7.1 gir nok skarphet til dråpene samtidig som bakgrunnen holdes dempet. Dette skaper et minimalistisk og dramatisk uttrykk.",
  "Bildet viser en bil i bevegelse på en svingete vei med høstfargede omgivelser. En brennvidde på 35mm ble valgt for å gi et naturlig perspektiv. Lukkertiden på 1/8 sekund skaper en bevegelseseffekt i omgivelsene, mens bilen holdes relativt skarp, noe som fremhever farten. Blenderåpningen på f/22 sikrer dybdeskarphet for både forgrunnen og bakgrunnen. ISO 100 gir minimalt med støy og sikrer god bildekvalitet. Innstillingene er brukt for å fange dynamikken i bevegelsen og samtidig beholde detaljer i landskapet.",
  "Bildet viser en foss omgitt av skog, fanget med en vidvinkel for å inkludere både fossen og omgivelsene. Lukkertiden på 1,3 sekunder gir vannet en silkemyk effekt, mens blenderåpningen på f/1.8 slipper inn mye lys, noe som var nødvendig i de mørkere omgivelsene. ISO 100 ble valgt for å minimere bildestøy. Manuell modus ga full kontroll over eksponeringen. Et ND-filter kunne ha blitt brukt for å oppnå større dybdeskarphet, men oppsettet sikret balanserte detaljer og atmosfære.",
  "Bildet viser en idyllisk landskapsscene med høstfarger, speilinger i vannet og et hus i bakgrunnen. Brennvidden på 35mm gir et naturlig perspektiv og fanger omgivelsene godt. Lukkertiden på 1/8 sekund gir en rolig speiling i vannet. Blenderåpningen på f/22 sørger for stor dybdeskarphet, slik at både forgrunn og bakgrunn er skarpe. ISO 100 ble brukt for å minimere bildestøy og opprettholde kvalitet. Manuell modus ga kontroll over eksponeringen, slik at detaljene i landskapet og de klare høstfargene kom godt frem.",
  "Bildet viser et blad med regndråper på en mørk bakgrunn, fanget om ettermiddagen under overskyede forhold som ga jevnt, mykt lys. En brennvidde på 98mm ble brukt for å isolere motivet og skape fokus på detaljene. Lukkertiden på 1/6 sekund og blenderåpningen på f/5.6 balanserte eksponeringen og ga tilstrekkelig dybdeskarphet til å fremheve dråpene. ISO 100 sikret minimal støy og høy bildekvalitet. De naturlige dråpene fra bekken og det diffuse lyset fremhever tekstur og kontrast i bildet.",
  "Bildet fokuserer på en grein med røde rognebær foran en kraftstasjon. Brennvidden på 135mm isolerer rognebærene og skaper dybde. Blenderåpningen f/36 gir stor dybdeskarphet, slik at både bærene og kraftstasjonen er skarpe. Lukkertiden på 4 sekunder gjør vannet silkemykt og fjerner distraksjoner. ISO 100 gir lav bildestøy og høy kvalitet. Innstillingene balanserer klarhet, detaljer og naturlige farger, med fokus på harmoni mellom natur og menneskeskapt landskap." ,
  "Bildet viser en nærbilde av en hvit blomst med gule pollen i midten, omgitt av visne blomster og en dempet bakgrunn. Bildet er tatt med en brennvidde på 135mm for å isolere motivet og skape en god komprimering av bakgrunnen. Blenderåpningen på f/5.6 gir en passe dybdeskarphet som fremhever blomsten mens bakgrunnen forblir uskarp. Lukkertiden på 1/80 sekund balanserer eksponeringen for det tilgjengelige lyset. ISO 200 ble brukt for å oppnå riktig lysstyrke uten merkbar støy. Naturlig lys skaper en myk, varm atmosfære som fremhever detaljer i blomstens tekstur.",
]

//Setter startverdiene
let aktivBilde = 0;
let pause = false;
let intervall; 

bilde.src = "/photos/" + bildeGalleri[aktivBilde];
bildeInfo.innerHTML = bildeTekst[aktivBilde];


//setter start intervall
intervall = setInterval(skiftBilde, 5000);


//Hver gang man endrer på slideren gjøres alt dette
slider.oninput = function () {
  //endrer teksten i html til den verdien
  hastighet.innerHTML = this.value;
  bildehastighet = this.value * 1000;

  //Sletter du det forje intervallet
  clearInterval(intervall);

  //Lager det nye med oppdatert hastighet
  intervall = setInterval(skiftBilde, bildehastighet);
};


//Venter på klikk og utfører endrePause når noen klikker
pauseKnapp.addEventListener("click", endrePause)


//Pause = true betyr at slideren er på pause

function endrePause() {
  //Når pause = true så blir den satt til false og endrer teksten til "Pause"
  if (pause == true) {
    pause = false
    pauseKnapp.innerHTML  = "Pause"
  //Når pause = false så blir den satt til true og endrer teksten til "Play"
  } else if (pause == false)  {
    pause = true
    pauseKnapp.innerHTML  = "Play"
  }
}

function skiftBilde() {
  //Skifter bilde kun om pauseknapp er false (trykket på)
  if (pause == false) {
    aktivBilde++;
    if (aktivBilde > bildeGalleri.length - 1) {
      aktivBilde = 0;
    }
// Skriver inn /photos/ som e mappen der bildene ligger og legger til det aktive bilde du er på EKS: aktiv bilde 2 vil bli /photos/Dråpe.png
    bilde.src = "/photos/" + bildeGalleri[aktivBilde];
// Endrer på bildeteksetn inne i html koden ... 
    bildeInfo.innerHTML = bildeTekst[aktivBilde];
  } 
}
5

