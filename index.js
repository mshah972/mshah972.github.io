const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending…';

    const endpoint = form.action;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {'Accept': 'application/json','Content-Type':'application/json'},
            body: JSON.stringify(data)
        });

        if (res.ok) {
            form.reset();
            statusEl.textContent = 'Thanks! Your message was sent.';
        } else {
            statusEl.textContent = 'Something went wrong. Please try again.';
        }
    } catch {
        statusEl.textContent = 'Network error. Please try again.';
    }
});

//show cst clock in the id 'cst-clock' in 'HH:MM PM?AM' format and update every second
const cstClock = document.getElementById('cst-clock');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
    cstClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
    setTimeout(updateClock, 1000);
}

updateClock();

