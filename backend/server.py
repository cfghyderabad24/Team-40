from flask import Flask

app = Flask(__name__)  # Create a Flask app instance

@app.route('/')  # Define a route at the root URL ('/')
def hello():
    return "Hello, World!"  # Return a simple text response

if __name__ == '__main__':
    app.run(debug=True, port=3002)  # Start the development server
