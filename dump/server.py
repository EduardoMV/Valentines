#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser
from threading import Timer

PORT = 8000
DIRECTORY = r"c:\Users\eduum\OneDrive\Desktop\Valentine"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def start_server():
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"✓ Server running at http://localhost:{PORT}")
        print(f"✓ Open your browser and navigate to http://localhost:{PORT}")
        print(f"✓ Press Ctrl+C to stop the server")
        
        # Open browser automatically after 1 second
        def open_browser():
            webbrowser.open(f"http://localhost:{PORT}")
        
        timer = Timer(1.0, open_browser)
        timer.daemon = True
        timer.start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n✓ Server stopped")

if __name__ == "__main__":
    start_server()
