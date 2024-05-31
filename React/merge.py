import pandas as pd

# Read the CSV files
df_players = pd.read_csv("working.csv")
df_images = pd.read_csv("cleaned_data.csv")

# Merge the two dataframes on the 'Player' column
df_merged = pd.merge(df_players, df_images, on='Player', how='left')

# Save the merged dataframe to a new CSV file
df_merged.to_csv("merged_data.csv", index=False)