# Load the dataset
from sklearn.datasets import load_digits
from sklearn.datasets import load_iris

model = load_digits()
digit_df = model.data
target_df = model.data





# print(model)
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
import numpy as np
X_train, X_test, y_train, y_test = train_test_split(
    digit_df,
    target_df,
    test_size=0.2,
    random_state=None
    # np.random.randint(10)
)

neigh = KNeighborsClassifier(n_neighbors=10)
neigh.fit(X_train,y_train)

# Split the dataset into training and 
# testing dataset. You need to use sklearn.
# model_selection.train_test_split and
# set the testing size to 30%,
# random_state as 10.