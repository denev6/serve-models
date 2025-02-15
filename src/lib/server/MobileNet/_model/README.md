# 🌊 MLFlow

## Open MLFlow-ui

```bash
mlflow ui
```

## Train

```bash
mlflow run . -e main --experiment-name=MobileNetV2 -P epoch=3 -P lr=0.005
```

## Predict

```bash
mlflow run . -e predict -P img="sample.png"
```
