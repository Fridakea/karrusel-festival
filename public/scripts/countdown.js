let daysTal = document.getElementById("days");
let hoursTal = document.getElementById("hours");
let minutesTal = document.getElementById("minutes");
let secondsTal = document.getElementById("seconds");

function countdownTimer() {
  console.log("countdownTimer");
  const countdownDato = new Date("08/22/2024").getTime();
  const sekund = 1000;
  const minut = sekund * 60;
  const time = minut * 60;
  const dag = time * 24;

  const interval = setInterval(() => {
    const nu = new Date().getTime();
    const tidTilbage = countdownDato - nu;

    daysTal.innerText = formatNumber(Math.floor(tidTilbage / dag));
    hoursTal.innerText = formatNumber(Math.floor((tidTilbage % dag) / time));
    minutesTal.innerText = formatNumber(Math.floor((tidTilbage % time) / minut));
    secondsTal.innerText = formatNumber(Math.floor((tidTilbage % minut) / sekund));
  }, 1000);
}

function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

//Starter funktionen

countdownTimer();
