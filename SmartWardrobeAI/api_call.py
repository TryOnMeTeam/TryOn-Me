import sys
import json

def get_random_image_url():
    # Return a fixed URL of a random image (for example, an apple)
    return "https://example.com/path/to/apple_image.jpg"  # Replace with actual image URL

if __name__ == "__main__":
    image_url = get_random_image_url()
    print(json.dumps({"imageUrl": image_url}))
