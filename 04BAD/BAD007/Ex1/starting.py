from sklearn.datasets import load_iris
import numpy as np 
import pandas as pd
df = pd.read_csv("./data.csv")
# print(df)
# if name 


# df = pd.concat([df,pd.get_dummies(df["name"],dtype=str)],axis=1)
# df.drop("name",axis=1,inplace=True)

# df = pd.concat([df,pd.get_dummies(df["age"],dtype=int)],axis=1)
# df.drop("age",axis=1,inplace=True)

df["is_married"] = df["is_married"].map(lambda x:1 if x == "yes" else 0)
df = pd.concat([df,pd.get_dummies(df["job"],dtype=int)],axis=1)
df.drop("job",axis=1,inplace=True)


print(df)