from flask import Flask, session
from flask_cors import CORS
from os import path
 
app = Flask(__name__)
app.config["SECRET_KEY"] = "crestron"
CORS(app, supports_credentials=True)

SERVER_NUM = 0
TOGGLE_STATE = False

@app.route('/health', methods=['GET'])
def health():
    return '0.123'

@app.route('/toggle/<update>', methods=['GET'])
def toggle(update):
    global TOGGLE_STATE
    if update == 'true':
        TOGGLE_STATE = not TOGGLE_STATE
    return str(TOGGLE_STATE)

if __name__ == '__main__':
    app.run(debug=True, port=5000 + SERVER_NUM)