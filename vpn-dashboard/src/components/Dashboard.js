import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://<RASPBERRY_PI_IP>:5000/logs')
        .then(res => setLogs(res.data));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Network Alerts</h2>
      <ul>{logs.map((log, i) => <li key={i}>{log}</li>)}</ul>
    </div>
  );
}
export default Dashboard;
