const htmlChart = document.getElementById('myChart');

// Utvikling
const sheetID = "1mtUCvbmgeE8nAs56Pf-zh8f8M4P2m3VPxcVDyLADcE4";
const slide1 = "'Form Responses 2'!A:C";

//Real
// const sheetID = "1B-l26rKZ0OeE-WjG-cKeCteJ1A57DvllM5f0Oy5pMrY"; 
// const slide1 = "'Form Responses 1'!A:C";

const apiNøkkel = "AIzaSyCnataM4zxOyI81j2WneliiezEvQOfd3M0";


const labels = ['For pengene', 'For miljøet', 'Det er en vane', 'For å vinne pengepremie']

// Aldersgrupper
let ung = [0, 0, 0, 0];
let voksne = [0, 0, 0, 0];
let eldre = [0, 0, 0, 0];
let gamle = [0, 0, 0, 0];


// Hent svar fra Google Sheets og fyll ut dataene
async function hentOgBehandleData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${slide1}?key=${apiNøkkel}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    let svar;

    console.log(data.values)

    data.values.forEach(svarArk => {

      //her finner jeg index for hvilke svar
      const panterFordi = svarArk[2]; //eks: For pengene, For miljøet

      for (let i = 0; i <= 3; i++) {
        if (panterFordi?.includes(labels[i])) {
          svar = i      


          const alder = svarArk[1]; //eks: Under 18
          if (alder == "Under 18") {
            ung[svar]++;
          } else if (alder == "18 - 30") {
            voksne[svar]++;
          } else if (alder == "31 - 50") {
            eldre[svar]++; 
          } else if (alder == "50+") {
            gamle[svar]++;
          }
        }
      }



    });
   
  } catch (error) {
    console.log("Feil ved henting av data:", error);
  }
}

async function lagDiagram() {
  await hentOgBehandleData();

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Under 18',
      data: ung,
      backgroundColor:  'rgba(255, 99, 132, 0.2)',
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 1,
      stack: '1',
      },
      {
        label: '18 - 30',
        data: voksne,
        backgroundColor:   'rgba(255, 159, 64, 0.2)',
        borderColor: "rgb(255, 159, 64)",
        borderWidth: 1,
        stack: '2',
      },
      {
        label: '31 - 50',
        data: eldre,
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: "rgb(255, 205, 0)",
        borderWidth: 1,
        stack: '3',
      },
      {
        label: '50+',
        data: gamle,
        backgroundColor: "rgba(255, 99, 0, 0.2)",
        borderColor: "rgb(255, 99, 0)",
        borderWidth: 1,
        stack: '4',
      },
    ],
  };


  

  


  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true, 
    }
  }

  //lager diagrammet
  new Chart(htmlChart, config);
}


lagDiagram();
