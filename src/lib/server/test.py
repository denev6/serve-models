import unittest
import subprocess
import time
import psutil
import signal

import requests


class TestAPI(unittest.TestCase):
    API_URL = "127.0.0.1"
    PORT = "8000"
    url = f"http://{API_URL}:{PORT}"

    @classmethod
    def setUpClass(cls):
        try:
            cls.server = subprocess.Popen(
                [
                    "uvicorn",
                    "main:app",
                    "--host",
                    str(cls.API_URL),
                    "--port",
                    str(cls.PORT),
                ]
            )
            cls._wait_for_server_to_be_ready()
        except Exception as exp:
            cls._terminate_server()
            raise exp

    @classmethod
    def tearDownClass(cls):
        cls._terminate_server()

    @classmethod
    def _wait_for_server_to_be_ready(cls, timeout=30, interval=5):
        start_time = time.time()

        while True:
            try:
                response = requests.get(cls.url)
                if response.status_code == 200:
                    print("Server is ready!")
                    return
            except requests.ConnectionError:
                # Server isn't up yet, continue checking
                pass

            if time.time() - start_time > timeout:
                raise TimeoutError(f"Server didn't start in {timeout} seconds.")
            time.sleep(interval)

    @classmethod
    def _terminate_server(cls):
        if cls.server:
            cls.server.terminate()

            try:
                cls.server.wait(timeout=5)
            except subprocess.TimeoutExpired:
                cls.server.kill()

            try:
                process = psutil.Process(cls.server.pid)
                process.send_signal(signal.SIGINT)
            except psutil.NoSuchProcess:
                pass

    def test_image_net_api(self):
        dataset = [
            (f"./MobileNet/static/sample/{label}.png", label)
            for label in ("Sneaker", "Trouser")
        ]

        for img, label in dataset:
            with open(img, "rb") as image_file:
                # { Field-name: File-name, File-object, File-type }
                files = {"file": (img, image_file, "image/png")}
                response = requests.post(
                    f"{self.url}/models/fashion-mnist", files=files
                )
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
        response = requests.post(f"{self.url}/models/mistral", json=req_json)
        resp_json = response.json()

        self.assertEqual(
            response.status_code, 200, f"Got status code: {response.status_code}"
        )
        self.assertTrue(isinstance(resp_json["text"], str), "Expected string")


if __name__ == "__main__":
    unittest.main()
