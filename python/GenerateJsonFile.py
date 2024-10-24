import json

# Function to generate a JSON object with repetitive data
def generate_large_json(size_in_mb):
    # Approximate number of characters needed for 10 MB JSON
    size_in_bytes = size_in_mb * 1024 * 1024

    # Repeating a simple pattern to reach the desired size
    data = {
        "large_key": "x" * (size_in_bytes - 100)  # Adjust for the JSON overhead
    }

    return data

# Generate a 10 MB JSON
data = generate_large_json(11)

# Write to a file
with open("11mb_payload.json", "w") as json_file:
    json.dump(data, json_file)

print("10 MB JSON file created: 10mb_payload.json")
