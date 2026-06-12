import http.server
import socketserver
import webbrowser
import threading
import time
import sys

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

def open_browser():
    # Wait a moment for the server socket to bind before opening browser
    time.sleep(1)
    url = f"http://localhost:{PORT}/"
    print(f"\n🚀 Launching web browser to preview Haru Mart at: {url}")
    webbrowser.open(url)

def main():
    # Start the browser open task in a background daemon thread
    threading.Thread(target=open_browser, daemon=True).start()
    
    # Run the native Python HTTP Server
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"📦 Haru Mart Local HTTP Server running on Port {PORT}")
            print(f"👉 Press Ctrl+C in this terminal window to stop the server at any time.")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Stopping Haru Mart server. Have a great day!")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
