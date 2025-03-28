import os
import sys
import warnings

current_dir = os.path.abspath(os.path.join(os.path.dirname(__file__)))
sys.path.append(current_dir)

from fastapi import FastAPI, Request, File, UploadFile, HTTPException
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware

from MobileNet.function import convert_image, predict
from Mistral.function import generate_answer, trim_answer
from tools import *

ALLOWED_ORIGINS = [
    # "https://serve-models.vercel.app",
    # "https://serve-models-git-main-denev6s.vercel.app",
    # "https://serve-models-s2db1f14g-denev6s.vercel.app",
    "http://localhost:8000",
    "http://192.168.0.3:8000",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# For ML models
warnings.filterwarnings("ignore")


# To see if the server is running.
@app.get("/")
async def hello():
    return {"text": "안녕하세요!"}


### Mistral(LLM) ###
@app.post("/models/mistral")
async def ask_llm(request: Request):
    """Return answer from Mistral LLM

    :param request (Request): JSON contains { text }
    :returns: { text }
    """
    data = await request.json()
    prompt = data.get("text", "")

    answer = generate_answer(prompt, max_len=200)
    answer = trim_answer(answer, max_lines=3)

    return {"text": answer.strip()}


### Fashion MNIST ###
@app.post("/models/fashion-mnist")
async def predict_fashion(file: UploadFile = File()):
    """Predict image using Mobile-net trained by Fashion-MNIST

    :param file (UploadFile): Image file.
    :returns: { label, prob }
    """
    file = await is_valid_size(file)
    file = await is_valid_image(file)

    img_tensor = convert_image(file.file)
    label, probs = predict(img_tensor)

    return {"label": label, "probs": probs}


### Test API ###


@app.post("/test/image")
async def upload_image(image: UploadFile = File()):
    """Return input image file

    :param file (UploadFile): Image file
    :returns (Response): Input image file
    """
    image_bytes = await image.read()
    return Response(content=image_bytes, media_type=image.content_type)


@app.post("/test/text")
async def receive_text(request: Request):
    """Return input text

    :param file (Request): JSON contains { text }
    :returns: { text }
    """

    data = await request.json()
    text = data.get("text", "")
    return {"text": text.strip()}


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    return {"request": request, "status_code": exc.status_code, "detail": exc.detail}
