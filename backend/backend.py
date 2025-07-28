from flask import Flask, jsonify
from logging_utils import log_event
import datetime

app = Flask(__name__)

@app.route("/logs")
def get_logs():
    with open("logs.txt", "r") as f:
        return jsonify(f.readlines())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
