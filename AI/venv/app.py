from flask import Flask, request, jsonify, render_template, session
from gigachat_api import get_access_token, send_prompt

app = Flask(__name__)
app.secret_key = "ваш_секретный_ключ"  # Замените на реальный секретный ключ

@app.route("/")
def home():
    # Инициализация сессии
    if "access_token" not in session:
        try:
            session["access_token"] = get_access_token()
            print("Токен получен")
        except Exception as e:
            print(f"Не удалось получить токен: {e}")
            return "Ошибка: не удалось получить токен", 500

    if "messages" not in session:
        session["messages"] = [{"role": "ai", "content": "С чем вам помочь?"}]

    return render_template("chat.html", messages=session["messages"])

@app.route("/send_message", methods=["POST"])
def send_message():
    user_prompt = request.json.get("message")
    if not user_prompt:
        return jsonify({"error": "Сообщение не может быть пустым"}), 400

    access_token = session.get("access_token")
    if not access_token:
        return jsonify({"error": "Токен не найден"}), 400

    # Отправляем запрос и получаем ответ
    response = send_prompt(user_prompt, access_token)

    # Сохраняем сообщение в сессии
    session["messages"].append({"role": "user", "content": user_prompt})
    session["messages"].append({"role": "ai", "content": response})

    # Возвращаем ответ
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)