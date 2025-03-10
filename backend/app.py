from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

RASA_API_URL = "http://localhost:5005/webhooks/rest/webhook"

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    
    # Send user input to Rasa
    response = requests.post(RASA_API_URL, json={"sender": "user", "message": user_input})
    
    # Extract bot response
    bot_response = response.json()[0]['text'] if response.json() else "I'm sorry, I didn't understand that."
    
    return jsonify({"response": bot_response})

if __name__ == '__main__':
    app.run(debug=True)