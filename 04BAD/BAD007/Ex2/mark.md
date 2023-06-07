
1. Load the dataset

2. Split the dataset into training and testing dataset. You need to use sklearn.model_selection.train_test_split and set the testing size to 30%, random_state as 10.

3. Build your model with sklearn.neighbors.KNeighborsClassifier()

4. Train the model with training dataset. Set the n_neighbors = 3.

5. Evaluate the model with testing dataset using sklearn.metrics.classification_report()