from flask import Flask, request, jsonify
from sendmail import gmail_send_message
app = Flask(__name__)  # Create a Flask app instance

@app.route('/sendMail', methods=['POST'])
def sendMail():
    if request.method == 'POST':
        toEmail = request.json['toEmail']
        subject = request.json['subject']
        body = request.json['body']
        response = gmail_send_message(toEmail, subject, body)
        return jsonify(response), 200
    else:
        return jsonify({"message": "Method Not Allowed"}), 405
        
      


if __name__ == '__main__':
    app.run(debug=True, port=3002)  # Start the development server
