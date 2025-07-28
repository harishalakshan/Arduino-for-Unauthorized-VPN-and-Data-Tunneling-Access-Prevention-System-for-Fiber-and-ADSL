import datetime

def log_event(event):
    with open("logs.txt", "a") as f:
        timestamp = datetime.datetime.now().isoformat()
        f.write(f"[{timestamp}] {event}\n")
