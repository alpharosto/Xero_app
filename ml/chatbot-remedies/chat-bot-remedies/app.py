from flask import Flask, request, jsonify
import pandas as pd
import joblib
import requests

app = Flask(__name__)



clf = joblib.load('decision_tree_model.joblib')  # Load your trained model
le = joblib.load('label_encoder.joblib')  # Load your label encoder

# Define feature columns
cols = ['symptom1', 'symptom2', 'symptom3', 'symptom4']  # Update with your actual feature columns

@app.route('/')
def home():
    return 'Welcome to Health Prediction System!'

@app.route('/predict', methods=['POST'])
def predict():
    # Get symptoms from request data
    symptoms = request.json.get('symptoms')

    # Check if symptoms are provided
    if not symptoms:
        return jsonify({'error': 'Symptoms are missing in the request'}), 400

    # Ensure symptoms is a list
    if not isinstance(symptoms, list):
        return jsonify({'error': 'Symptoms should be provided as a list'}), 400

    # Check if number of symptoms matches number of columns
    if len(symptoms) != len(cols):
        return jsonify({
            'error': f'Number of symptoms ({len(symptoms)}) does not match number of columns ({len(cols)})',
            'expected_columns': cols
        }), 400
    
    # Make predictions
    input_data = pd.DataFrame([symptoms], columns=cols)
    prediction = clf.predict(input_data)
    decoded_prediction = le.inverse_transform(prediction)
    
    # Return the prediction
    return jsonify({'prediction': decoded_prediction[0]}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
