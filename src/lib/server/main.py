from fastapi import FastAPI, File, UploadFile, Request
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware

ALLOWED_ORIGINS = ["*"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/image")
async def upload_image(image: UploadFile = File(...)):
    image_bytes = await image.read()
    return Response(content=image_bytes, media_type=image.content_type)

@app.post("/text")
async def receive_text(request: Request):
    data = await request.json()
    text = data.get("text", "")
    return {"text": f"Received: {text}"}