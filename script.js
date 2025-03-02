let user_id = 12345; // В реальній грі потрібно отримувати user_id з Telegram Web Apps API
let username = "Player";

async function updateScore() {
    let response = await fetch(`http://127.0.0.1:8000/score/?user_id=${user_id}`);
    let data = await response.json();
    document.getElementById("score").innerText = `Твої очки: ${data.score}`;
}

document.getElementById("click-button").addEventListener("click", async () => {
    await fetch(`http://127.0.0.1:8000/click/?user_id=${user_id}&username=${username}`, { method: "POST" });
    updateScore();
});

document.getElementById("reset-button").addEventListener("click", async () => {
    await fetch(`http://127.0.0.1:8000/reset/?user_id=${user_id}`, { method: "POST" });
    updateScore();
});

updateScore();
