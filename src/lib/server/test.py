import unittest

import requests


class TestAPI(unittest.TestCase):
    API_URL = "http://127.0.0.1"
    PORT = "8000"
    url = f"{API_URL}:{PORT}/"

    def test_image_net_api(self):
        dataset = [
            (f"./MobileNet/static/sample/{label}.png", label)
            for label in ("Sneaker", "Trouser")
        ]

        for img, label in dataset:
            with open(img, "rb") as image_file:
                # { Field-name: File-name, File-object, File-type }
                files = {"file": (img, image_file, "image/png")}
                response = requests.post(f"{self.url}/fashion-mnist", files=files)
                resp_json = response.json()

            self.assertEqual(
                response.status_code, 200, f"Got status code: {response.status_code}"
            )
            self.assertEqual(
                resp_json["label"], label, f"Expected {label}, got {resp_json['label']}"
            )

    def test_mistral_api(self):
        query = "What is the capital of Australia?"
        req_json = {"text": query}
        response = requests.post(f"{self.url}/mistral", json=req_json)
        resp_json = response.json()

        self.assertEqual(
            response.status_code, 200, f"Got status code: {response.status_code}"
        )
        self.assertTrue(isinstance(resp_json["text"], str), "Expected string")



if __name__ == "__main__":
    unittest.main()
