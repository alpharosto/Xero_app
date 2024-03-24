import re
import pandas as pd
from sklearn import preprocessing
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import joblib

# Load data
training = pd.read_csv('./Data/Training.csv')

# Extract features and labels
cols = training.columns[:-1]
x = training[cols]
y = training['prognosis']

# Encode labels
le = preprocessing.LabelEncoder()
le.fit(y)
y_encoded = le.transform(y)

# Train-test split
x_train, x_test, y_train, y_test = train_test_split(x, y_encoded, test_size=0.33, random_state=42)

# Train Decision Tree Classifier
clf = DecisionTreeClassifier()
clf.fit(x_train, y_train)

# Save the model using Joblib
joblib.dump(clf, 'decision_tree_model.joblib')

# Save the label encoder
joblib.dump(le, 'label_encoder.joblib')

print("Model trained and saved successfully!")

# Now, to use the trained model for prediction:

# Load the saved model and label encoder
clf = joblib.load('decision_tree_model.joblib')
le = joblib.load('label_encoder.joblib')

# Load testing data
testing = pd.read_csv('./Data/Testing.csv')
test_x = testing[cols]
test_y = testing['prognosis']

# Encode the testing labels
test_y_encoded = le.transform(test_y)

# Make predictions
predictions = clf.predict(test_x)

# Decode the predictions
decoded_predictions = le.inverse_transform(predictions)

# Calculate accuracy
accuracy = (predictions == test_y_encoded).mean()
print("Accuracy:", accuracy)
