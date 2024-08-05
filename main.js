const days = document.querySelector("#days");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");
const sec = document.querySelector("#seconds");

const currentDate = new Date().getFullYear();

const WeddingTime = new Date("September 29 2024 18:00:00");

const updateCountdown = () => {
  const currentTime = new Date();
  const diff = WeddingTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
};
setInterval(updateCountdown, 1000);


const form = document.querySelector("form");
const token = '7258038150:AAGvJ_Bjm7j283-m_C3YC14IPUgBiDo3J4I'
const chat_id = '@modalithink'
const API = `https://api.telegram.org/bot${token}/sendmessage`
form.onsubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const attendance = formData.get('attendance');
    console.log(name);
    const text = `Имя: ${name} ${surname}\n${attendance}`;

    await fetch(API,{
      method:'POST',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
        chat_id: chat_id, text
      })
    })
  };

