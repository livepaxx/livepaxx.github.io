let user_id = 12345; // В реальній грі потрібно отримувати user_id з Telegram Web Apps API
let username = "Player";
const apiBaseUrl = "http://127.0.0.1:8000"; // Замініть на ваш сервер, коли потрібно

// Функція для отримання та оновлення рахунку на сторінці
async function updateScore() {
    try {
        let response = await fetch(`${apiBaseUrl}/score/?user_id=${user_id}`);
        if (!response.ok) throw new Error("Не вдалося отримати рахунок");
        let data = await response.json();
        document.getElementById("score").innerText = `Твої очки: ${data.score}`;
    } catch (error) {
        console.error("Помилка при оновленні рахунку:", error);
        document.getElementById("score").innerText = "Помилка завантаження рахунку";
    }
}

// Обробник кліку для збільшення рахунку
document.getElementById("click-button").addEventListener("click", async () => {
    try {
        let response = await fetch(`${apiBaseUrl}/click/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id, username }),
        });
        if (!response.ok) throw new Error("Не вдалося оновити рахунок");
        updateScore();
    } catch (error) {
        console.error("Помилка кліку:", error);
    }
});

// Обробник скидання рахунку
document.getElementById("reset-button").addEventListener("click", async () => {
    try {
        let response = await fetch(`${apiBaseUrl}/reset/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id }),
        });
        if (!response.ok) throw new Error("Не вдалося скинути рахунок");
        updateScore();
    } catch (error) {
        console.error("Помилка скидання рахунку:", error);
    }
});

// Завантаження рахунку при відкритті сторінки
updateScore();
