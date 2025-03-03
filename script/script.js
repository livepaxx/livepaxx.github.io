let userId = "user123"; // Replace with Telegram Web Apps API user_id

async function clickButton() {
    const response = await fetch(`https://backend-iqp0.onrender.com/click/?user_id=${userId}`, { method: "POST" });
    const data = await response.json();
    document.getElementById("score").innerText = `Your Score: ${data.score}`;
}

async function resetScore() {
    await fetch(`https://backend-iqp0.onrender.com/reset/?user_id=${userId}`, { method: "POST" });
    document.getElementById("score").innerText = "Your Score: 0";
}

async function getScore() {
    const response = await fetch(`https://backend-iqp0.onrender.com/score/?user_id=${userId}`);
    const data = await response.json();
    document.getElementById("score").innerText = `Your Score: ${data.score}`;
}

window.onload = getScore;
