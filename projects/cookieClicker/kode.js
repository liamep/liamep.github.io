// Brukes for formel
let startPris = 10;
let belønningØkning = 2;
let multiplier = 1;

let lyd = new Audio("bite.wav");




let level = 1; // Setter level til 1
let penger = 0; // Setter penger til 0
let pris = 10; // Setter pris til 10

document.getElementById("cupcake").addEventListener("click", klikk)
        function klikk() {
        lyd.play();
        //Finner id cupcake i html-document...Venter på fungsjonen-når...når klikke på objektet gjør fungsonen under
         penger =  Math.floor(penger + 1 * multiplier);
        // Plusser på 1 til penger i java
        document.getElementById("penger").innerText = penger;
        // Endrer penger i html og gjør at d vises på skjermen
  
};

document.getElementById("upgrade").addEventListener("click", endreLevel);

function endreLevel() {
      if (penger >= pris) { // Ser om du har nokk penger til det prisen koster
        penger = penger - pris; // Trekker fra prisen det koster fra prisen
        multiplier = multiplier + 1 
        document.getElementById("penger").innerText = penger;

        pris = kalkulerPris(); // Kalkuleringspris: Formelen
        document.getElementById("price").innerText = pris;
        level++;
        document.getElementById("level").innerText = level;
      }
}


function kalkulerPris() {
        return startPris + belønningØkning ** level;
        // Formlen for neste pris på levelen
        // 10 + 2^1
        // 10 + 2^2
        // 10 + 2^3
        }
                                                                                            
      