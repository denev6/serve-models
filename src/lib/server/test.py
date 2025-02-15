import requests


def test_fashion_mnist(url="http://127.0.0.1", port=None):
    if port is None:
        url = f"{url}/fashion-mnist/"
    else:
        url = f"{url}:{port}/fashion-mnist/"
    images = [
        f"./MobileNet/static/sample/{name}.png" for name in ("Sneaker", "Trouser")
    ]

    for img in images:
        with open(img, "rb") as image_file:
            # { Field-name: File-name, File-object, File-type }
            files = {"file": (img, image_file, "image/png")}
            response = requests.post(url, files=files)
            resp_json = response.json()

        print("Status:", response.status_code)
        print("Response:", resp_json)

        assert response.status_code == 200


if __name__ == "__main__":
    API_URL = "http://127.0.0.1"
    PORT = "8000"
    test_fashion_mnist(API_URL, PORT)
