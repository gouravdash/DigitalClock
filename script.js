const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let currentDate = new Date();
  let h = currentDate.getHours();
  let m = currentDate.getMinutes();
  let s = currentDate.getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h=h<10 ? "0"+h :h
  m=m<10 ? "0"+m :m
  s=s<10 ? "0"+s :s
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
