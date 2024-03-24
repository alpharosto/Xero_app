from tkinter import *
import numpy as np
import pandas as pd
import joblib
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn import preprocessing
import warnings


training = pd.read_csv('Training.csv')
testing = pd.read_csv('Testing.csv')

cols = training.columns[:-1]
x = training[cols]
y = training['prognosis']

# Mapping strings to numbers
le = preprocessing.LabelEncoder()
le.fit(y)
y = le.transform(y)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=42)

# Decision Tree Classifier
clf1 = DecisionTreeClassifier()
clf = clf1.fit(x_train, y_train)

scores = cross_val_score(clf, x_test, y_test, cv=3)
print("Decision Tree Cross Validation Mean Score:", scores.mean())

# Support Vector Machine Classifier
model = SVC()
model.fit(x_train, y_train)
print("SVM Score:", model.score(x_test, y_test))

# Save trained model
joblib.dump(model, 'model.joblib')

# GUI Function to predict disease using DecisionTree model
def DecisionTree():
    from sklearn.metrics import accuracy_score

    # Load trained model
    clf3 = joblib.load('model.joblib')

    # Retrieve symptoms from GUI input
    psymptoms = [Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get()]

    # Reset symptoms list
    symptoms_list = [0] * len(cols)

    # Mark symptoms as present
    for symptom in psymptoms:
        if symptom in cols:
            index = np.where(cols == symptom)[0][0]
            symptoms_list[index] = 1

    # Make prediction using model
    input_test = [symptoms_list]
    predicted = clf3.predict(input_test)[0]

    # Get predicted disease
    predicted_disease = le.inverse_transform([predicted])[0]

    # Update GUI with predicted disease
    t1.delete("1.0", END)
    t1.insert(END, predicted_disease)

# GUI setup
root = Tk()
root.configure(background='blue')

# Create labels and entry fields for symptoms
Label(root, text="Symptom 1", fg="yellow", bg="black").grid(row=0, column=0, pady=10, sticky=W)
Symptom1 = Entry(root)
Symptom1.grid(row=0, column=1)

Label(root, text="Symptom 2", fg="yellow", bg="black").grid(row=1, column=0, pady=10, sticky=W)
Symptom2 = Entry(root)
Symptom2.grid(row=1, column=1)

Label(root, text="Symptom 3", fg="yellow", bg="black").grid(row=2, column=0, pady=10, sticky=W)
Symptom3 = Entry(root)
Symptom3.grid(row=2, column=1)

Label(root, text="Symptom 4", fg="yellow", bg="black").grid(row=3, column=0, pady=10, sticky=W)
Symptom4 = Entry(root)
Symptom4.grid(row=3, column=1)

Label(root, text="Symptom 5", fg="yellow", bg="black").grid(row=4, column=0, pady=10, sticky=W)
Symptom5 = Entry(root)
Symptom5.grid(row=4, column=1)

# Create button for predicting disease
Button(root, text="Predict Disease", command=DecisionTree, bg="green", fg="yellow").grid(row=5, columnspan=2, pady=10)

# Create text field to display predicted disease
t1 = Text(root, height=2, width=50, bg="orange", fg="black")
t1.grid(row=6, columnspan=2, padx=10)

# Run the GUI
root.mainloop()
