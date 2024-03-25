from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)

# Load the trained model
try:
    model = joblib.load('model.joblib')
except FileNotFoundError:
    print("Model file not found. Please ensure that 'model.joblib' exists.")
    exit()
except Exception as e:
    print("An error occurred while loading the model:", str(e))
    exit()

# Load symptoms list
try:
    symptoms = pd.read_csv("Training.csv").columns[:-1].tolist()
except FileNotFoundError:
    print("Symptoms file not found. Please ensure that 'Training.csv' exists.")
    exit()
except Exception as e:
    print("An error occurred while loading symptoms:", str(e))
    exit()

@app.route('/')
def index():
    return render_template('index.html', symptoms=symptoms)

@app.route('/predict', methods=['POST'])
def predict():
    # Get input data from the form
    symptoms_input = [request.form[f'Symptom{i}'] for i in range(1, 6)]

    # Convert symptoms to a list of 0s and 1s
    input_data = [1 if symptom in symptoms_input else 0 for symptom in symptoms]

    # Predict using the model
    try:
        prediction = model.predict([input_data])[0]
    except Exception as e:
        return render_template('error.html', message="An error occurred while making the prediction: " + str(e))

    # Get the corresponding disease
    try:
        diseases = pd.read_csv("Training.csv")["prognosis"].unique()
        disease = diseases[prediction]
    except Exception as e:
        return render_template('error.html', message="An error occurred while fetching the disease: " + str(e))

    # Return prediction result to the template
    return render_template('index.html', prediction=disease)

if __name__ == '__main__':
    app.run(debug=true,host)
