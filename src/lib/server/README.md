# FastAPI

```bash
uvicorn main:app --host=127.0.0.1 --port=8000 --reload
```

## Run on Render

```bash
pip install requirements.txt
uvicorn main:app --host=0.0.0.0 --port=$PORT
```

## Docker

```bash
docker build -t app:0.1 .
docker image ls -a
docker run -p 8080:8000 app:0.1
docker run -p 8080:8000 --name test app:0.1
```

URL: 127.0.0.1:8080

### Remove

```bash
docker rm test
docker rmi app:0.1
```
