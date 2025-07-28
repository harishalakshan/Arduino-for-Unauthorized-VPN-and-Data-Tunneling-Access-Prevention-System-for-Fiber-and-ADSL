# 🔐 Unauthorized VPN Tunneling Prevention System – Full Stack AI + IoT Application

An intelligent, end-to-end security system that detects and blocks unauthorized VPN or tunneling access in real-time using Python, React, Raspberry Pi, Arduino, Twilio, Machine Learning, and MQTT.

## 🚀 Project Overview

This system is designed to prevent unauthorized VPN tunneling by:
- Monitoring real-time packet flow via Raspberry Pi
- Detecting suspicious packet patterns using machine learning
- Displaying live dashboards with React.js and Chart.js
- Sending Email/SMS alerts via Twilio
- Triggering Arduino-based physical responses
- Supporting MQTT for remote embedded control

## 🧰 Tech Stack

| Component         | Technology Used                                |
|------------------|-------------------------------------------------|
| Frontend         | React.js, Chart.js/Recharts                     |
| Backend          | Python (Flask), scikit-learn/TensorFlow Lite    |
| Embedded Layer   | Raspberry Pi, Arduino UNO                       |
| Communication    | MQTT (e.g., Eclipse Mosquitto), Serial, GPIO    |
| Alerts           | Twilio (SMS/Email)                              |
| Visualization    | Real-time dashboard, live alerts, and graphs    |


## 🎯 Key Features

✅ AI-Based VPN Detection  
✅ Real-Time Chart Visualization  
✅ MQTT Communication Layer  
✅ Twilio-Powered Alerting  
✅ Arduino Response System  
✅ Lightweight & Modular Design  
✅ Live Behavior Prediction with ML


## 📦 Directory Structure


VPN\_Tunneling\_Prevention\_System/
├── arduino/
│   └── alert\_handler.ino           # Arduino response system
├── backend/
│   ├── app.py                      # Flask server for VPN detection
│   ├── vpn\_detector.py             # ML model for packet behavior
│   ├── mqtt\_publisher.py           # MQTT communication
│   └── utils/                      # Helper modules
├── frontend/
│   ├── src/
│   │   ├── components/             # React components
│   │   ├── App.js                  # Main UI with live graphs
│   │   └── services/api.js         # Backend connection
├── ml\_model/
│   └── vpn\_model.pkl               # Trained ML model
├── circuit\_diagram/
│   └── vpn\_iot\_architecture.png    # Visual wiring guide
└── README.md


## 🧠 Machine Learning Logic

The ML model classifies network traffic as:
- `Normal Traffic`
- `VPN Tunneling Detected`

### 🔍 Features Used
- Packet length
- Time-to-live (TTL)
- Protocol signatures
- Packet frequency per second
- Obfuscated ports

> ML algorithms tested: Logistic Regression, Random Forest, SVM


## 🔧 Setup Instructions

### 🔌 Hardware Requirements
- Raspberry Pi 3/4
- Arduino UNO
- Ethernet/Wi-Fi Connection
- LEDs, Resistors, Breadboard
- USB for serial communication

### 💻 Software Setup

#### 1. Backend Setup
bash
cd backend/
pip install -r requirements.txt
python app.py


#### 2. Arduino Setup

* Open `alert_handler.ino` in Arduino IDE.
* Connect Arduino via USB and upload the sketch.

#### 3. Frontend Setup

bash
cd frontend/
npm install
npm start

#### 4. MQTT Broker (Optional)

Install Mosquitto:

bash
sudo apt install mosquitto mosquitto-clients

## ✉️ Alerting with Twilio

Update `twilio_config.py` with your Twilio credentials:

python
account_sid = 'your_account_sid'
auth_token = 'your_auth_token'
twilio_number = '+1234567890'
target_number = '+0987654321'

System will send:

* VPN detection alerts
* Prediction-based early warnings
* Hardware-triggered breach notices


## 📈 Real-Time Dashboard (React + Chart.js)

Monitors:

* Traffic volume
* Detection alerts
* Behavior score (ML)
* Actuation triggers (from Arduino)


## 🔄 MQTT Integration

Topic: `iot/vpn/detection`

Use `mqtt_publisher.py` to send data:

python
client.publish("iot/vpn/detection", json.dumps(payload))

Can connect to:

* Node-RED dashboards
* Home Assistant
* IoT Cloud Platforms (e.g., AWS IoT, Azure IoT Hub)

## ⚠️ Security Considerations

* System uses non-root networking access.
* Designed for small to medium networks.
* Extendable with firewall configuration (iptables).
* Use encrypted MQTT for secure message delivery.

## 🧪 Testing

Run test logs and simulate packets:

bash
python simulate_packet.py

Observe:

* Arduino LED status
* Console logs
* Recharts UI graphs
* SMS/Email alerts

## 📌 Roadmap & Future Work

* [x] Real-time packet inspection
* [x] Twilio alert integration
* [x] MQTT controller link
* [ ] AI auto-retraining pipeline
* [ ] Web-based configuration panel
* [ ] Blockchain logging for tamper-proof audits

## 🙌 Contributors

Harisha Warnakulasuriya – Lead Developer & Architect
  Follow my newsletter for more AI + IoT projects!
  🚀 GitHub: `@yourprofile` | 🌐 [Project Page](https://image-identification-ai.vercel.app/)

📄 License

This project is open-source under the MIT License. Feel free to modify and extend for educational or commercial use.


## 📬 Contact

Have feedback or ideas?
📧 [unicornprofessionalbay@gmail.com](mailto:unicornprofessionalbay@gmail.com)
💡 Share your improvements and star the repo if you find it useful!

