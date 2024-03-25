# from flask import Flask, request, jsonify
# from twilio.rest import Client

# app = Flask(__name__)

# # Twilio credentials
# TWILIO_ACCOUNT_SID = 
# TWILIO_AUTH_TOKEN = 
# TWILIO_PHONE_NUMBER = '

# # Initialize Twilio client
# client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# # API endpoint for sending messages
# @app.route('/api/send_message', methods=['POST'])
# def send_message():
#     data = request.json

#     # Extract message details from request
#     to_numbers = data.get('to_numbers', [])
#     message_body = data.get('message_body', '')

#     # Send messages to designated contacts
#     for to_number in to_numbers:
#         message = client.messages.create(
#             body=message_body,
#             from_=TWILIO_PHONE_NUMBER,
#             to=to_number
#         )

#         print("Message sent to", to_number, "Message SID:", message.sid)

#     return jsonify({"message": "Messages sent successfully"}), 200

# if __name__ == '__main__':
#     app.run(debug=True)
