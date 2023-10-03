from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.config["SECRET_KEY"] = "crestron"
CORS(app, supports_credentials=True)

SERVER_ID = 11
TOGGLE_STATE = False

@app.route('/health', methods=['GET'])
def health():
    return 'True'

@app.route('/toggle/<update>', methods=['GET'])
def toggle(update):
    global TOGGLE_STATE
    if update == 'true':
        TOGGLE_STATE = not TOGGLE_STATE
    return str(TOGGLE_STATE)

if __name__ == '__main__':
    app.run(debug=True, port=5000 + SERVER_ID)