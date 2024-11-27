let img_stein = document.getElementsByClassName("stein")[0];
let img_saks = document.getElementsByClassName("saks")[0];
let img_papir = document.getElementsByClassName("papir")[0];

img_stein.addEventListener("click", velgStein);

let spillerValg = 0;

let spillerScore = 0;
let motstanderScore = 0;

function velgStein() {
  spillerValg = 0;

  console.log("Du valgte stein!");

  img_saks.style.display = "none";
  img_papir.style.display = "none";
  motstanderValg();
}

img_saks.addEventListener("click", velgSaks);

function velgSaks() {
  spillerValg = 1;

  console.log("Du valgte saks!");
  img_stein.style.display = "none";
  img_papir.style.display = "none";
  motstanderValg();
}

img_papir.addEventListener("click", velgPapir);

function velgPapir() {
  spillerValg = 2;

  console.log("Du valgte papir!");
  img_stein.style.display = "none";
  img_saks.style.display = "none";
  motstanderValg();
}

let valg = ["stein", "saks", "papir"];
let width = [350, 200, 270];

function motstanderValg() {
  let motstanderValg = Math.round(Math.random() * 2);
  console.log("Motstander valgte: " + valg[motstanderValg]);

  if (spillerValg == motstanderValg) {
    console.log("Uavgjort");
    document.getElementById("Overskrift").innerText = "Uavgjort";
  } else if (spillerValg == 0 && motstanderValg == 1) {
    console.log("Spiller vant");
    document.getElementById("Overskrift").innerText = "Vinn";
  } else if (spillerValg == 1 && motstanderValg == 2) {
    document.getElementById("Overskrift").innerText = "Vinn";
  } else if (spillerValg == 2 && motstanderValg == 0) {
    document.getElementById("Overskrift").innerText = "Vinn";
  } else if (spillerValg == 1 && motstanderValg == 0) {
    document.getElementById("Overskrift").innerText = "Tap";
  } else if (spillerValg == 2 && motstanderValg == 1) {
    document.getElementById("Overskrift").innerText = "Tap";
  } else if (spillerValg == 0 && motstanderValg == 2) {
    document.getElementById("Overskrift").innerText = "Tap";
  }

  let div = document.createElement("div");
  let bilde = document.createElement("img");
  bilde.src = "/bilder/" + valg[motstanderValg] + ".png";
  bilde.width = width[motstanderValg];

  div.classList.add("kort");
  div.classList.add(valg[motstanderValg]);
  div.style.backgroundColor = "purple";
  div.style.pointerEvents = "none";

  div.id = "motstanderValg";

  div.appendChild(bilde);
  document.getElementById("spillvalg").appendChild(div);
  document.getElementsByClassName(valg[spillerValg])[0].style.pointerEvents =
    "none";
}

let restartKnapp = document.getElementById("restart");
restartKnapp.addEventListener("click", restart);

document.addEventListener("keydown", function (event) {
  if (event.key == " " || event.key == "r" || event.key == "Enter") restart();
});

function restart() {
  document.getElementById("motstanderValg").remove();
  img_stein.style.display = "flex";
  img_papir.style.display = "flex";
  img_saks.style.display = "flex";

  document.getElementsByClassName(valg[spillerValg])[0].style.pointerEvents =
    "auto";
}
