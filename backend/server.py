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
        
@app.route('/sendUpdate', methods=['POST'])
def sendUpdate():
    if request.method == 'POST':
        leademails = request.json['leademails']
        print("leademails", leademails)
        subject = "Update from Next Skills 360"
        body = request.json['body']
        for email in leademails:
            gmail_send_message(email, subject, body)
        return jsonify("Notification Sent"), 200


if __name__ == '__main__':
    app.run(debug=True, port=3002)  # Start the development server
