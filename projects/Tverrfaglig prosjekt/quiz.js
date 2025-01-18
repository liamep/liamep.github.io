const ChatgptNøkkel =
  "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";

let aktivtSpørsmål; 



async function hentSpørsmål() {
  const svar = await fetch("https://openapi-endpoint.onrender.com/api/sporsmal", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   model: "gpt-3.5-turbo",
    //   // messages: [
    //   //   {
    //   //     role: "user",
    //   //     content:
    //   //       'Gi meg et miljøspørsmål (Ikke de vanlige typiske spørsmålene)(ikke for avansert)(korte spørsmål) i dette formatet: {"question": "spørsmål", "options": ["alt1", "alt2", "alt3", "alt4"], "correct_answer": N}',
            
    //   //   },
    //   // ],
    // }),
  });


  const data = await svar.json();
  aktivtSpørsmål = data;

  console.log("CHATGPT: ", data)

  // Viser spørsmålet og svaralternativene
  document.getElementById("spørsmål").innerHTML = data.question;
  document.getElementById("valg_0").innerHTML = data.options[0];
  document.getElementById("valg_1").innerHTML = data.options[1];
  document.getElementById("valg_2").innerHTML = data.options[2];
  document.getElementById("valg_3").innerHTML = data.options[3];
}


// async function hentSpørsmål2() {
//   const svar = await fetch("https://openapi-endpoint.onrender.com/api/chat", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       "prompt": 'Gi meg et miljøspørsmål (Ikke de vanlige typiske spørsmålene)(ikke for avansert)(korte spørsmål) i dette formatet: {"question": "spørsmål", "options": ["alt1", "alt2", "alt3", "alt4"], "correct_answer": N}'
//     }),
//   });

//   const data = await svar.json();
//   aktivtSpørsmål = data;

//   console.log("CHATGPT: ", data);

//   // Oppdater HTML
//   document.getElementById("spørsmål").innerHTML = data.question;
//   document.getElementById("valg_0").innerHTML = data.options[0];
//   document.getElementById("valg_1").innerHTML = data.options[1];
//   document.getElementById("valg_2").innerHTML = data.options[2];
//   document.getElementById("valg_3").innerHTML = data.options[3];
// }









resultat = document.getElementById("resultat");


//neste spørsmål
document.getElementById("neste_spørsmål").onclick = () => {
    hentSpørsmål()
    valg0.style.border = "none"
     valg1.style.border = "none"
      valg2.style.border = "none"
       valg3.style.border = "none"
    resultat.innerHTML = ""
}

const valg0 = document.getElementById("valg_0");
const valg1 = document.getElementById("valg_1");
const valg2 = document.getElementById("valg_2");
const valg3 = document.getElementById("valg_3");



valg0.onclick = () => {
   resultat.innerHTML = ""
    if (aktivtSpørsmål.correct_answer == 0) {
      resultat.innerHTML = "Riktig"
      valg0.style.border = "5px solid green"
    } else {
    resultat.innerHTML = "Feil"
      valg0.style.border = "5px solid red"
  }
}

valg1.onclick = () => {
     resultat.innerHTML = ""
    if (aktivtSpørsmål.correct_answer == 1) {
         resultat.innerHTML = "Riktig"
          valg1.style.border = "5px solid green"
    } else {
      resultat.innerHTML = "Feil"
         valg1.style.border = "5px solid red"
    }
}

valg2.onclick = () => {
     resultat.innerHTML = ""
    if (aktivtSpørsmål.correct_answer == 2) {
        resultat.innerHTML = "Riktig"
        valg2.style.border = "5px solid green"
    }else {
      resultat.innerHTML = "Feil"
      valg2.style.border = "5px solid red"
    }
}

valg3.onclick = () => {
  
    if (aktivtSpørsmål.correct_answer == 3) {
      resultat.innerHTML = "Riktig"
      valg3.style.border = "5px solid green"
    } else {
      resultat.innerHTML = "Feil"
      valg3.style.border = "5px solid red"
    }
}



// Starter quizen
hentSpørsmål();