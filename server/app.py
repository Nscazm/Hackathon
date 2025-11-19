from flask import Flask, jsonify
from flask_cors import CORS

from routes.user import user_bp
from routes.messages import messages_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(user_bp, url_prefix="/user")
app.register_blueprint(messages_bp, url_prefix="/messages")

@app.route('/')
def home():
    return jsonify({"message": "Flask backend connected successfully!"})

if __name__ == '__main__':
    app.run(debug=True)