let backend_url = "https://backend-iqp0.onrender.com";

async function updateScore() {
    let response = await fetch(`${backend_url}/score/?user_id=${user_id}`);
    let data = await response.json();
    document.getElementById("score").innerText = `Твої очки: ${data.score}`;
}

document.getElementById("click-button").addEventListener("click", async () => {
    await fetch(`${backend_url}/click/?user_id=${user_id}&username=${username}`, { method: "POST" });
    updateScore();
});

document.getElementById("reset-button").addEventListener("click", async () => {
    await fetch(`${backend_url}/reset/?user_id=${user_id}`, { method: "POST" });
    updateScore();
});

updateScore();
