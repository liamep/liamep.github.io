const ChatgptNøkkel =
  "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";

let aktivtSpørsmål; 



async function hentSpørsmål() {
  const svar = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ChatgptNøkkel}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            'Gi meg et miljøspørsmål (Ikke de vanlige typiske spørsmålene)(ikke for avansert)(korte spørsmål) i dette formatet: {"question": "spørsmål", "options": ["alt1", "alt2", "alt3", "alt4"], "correct_answer": N}',
            
        },
      ],
    }),
  });

  
  const data = JSON.parse((await svar.json()).choices[0].message.content);
  aktivtSpørsmål = data;

  console.log("CHATGPT: ", data)

  // Viser spørsmålet og svaralternativene
  document.getElementById("spørsmål").innerHTML = data.question;
  document.getElementById("valg_0").innerHTML = data.options[0];
  document.getElementById("valg_1").innerHTML = data.options[1];
  document.getElementById("valg_2").innerHTML = data.options[2];
  document.getElementById("valg_3").innerHTML = data.options[3];
}





resultat = document.getElementById("resultat");


//neste spørsmål
document.getElementById("neste_spørsmål").onclick = () => {
    hentSpørsmål()
    resultat.innerHTML = ""
}


document.getElementById("valg_0").onclick = () => {
    if (aktivtSpørsmål.correct_answer == 0) {
        resultat.innerHTML = "Riktig"
        resultat.style.color = "green"
    } else resultat.innerHTML = "Feil"
    resultat.style.color = "red"
}

document.getElementById("valg_1").onclick = () => {
    if (aktivtSpørsmål.correct_answer == 1) {
         resultat.innerHTML = "Riktig"
         resultat.style.color = "green"
    } else resultat.innerHTML = "Feil"
    resultat.style.color = "red"
}

document.getElementById("valg_2").onclick = () => {
    if (aktivtSpørsmål.correct_answer == 2) {
        resultat.innerHTML = "Riktig"
        resultat.style.color = "green"
    } else resultat.innerHTML = "Feil"
    resultat.style.color = "red"
}

document.getElementById("valg_3").onclick = () => {
    if (aktivtSpørsmål.correct_answer == 3) {
        resultat.innerHTML = "Riktig"
        resultat.style.color = "green"
    } else resultat.innerHTML = "Feil"
    resultat.style.color = "red"
}



// Starter quizen
hentSpørsmål();