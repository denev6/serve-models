from pathlib import Path

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

model_path = "Mistral/mistral"
parent_dir = Path(__file__).resolve().parent
MODEL_PATH = parent_dir / '..' / model_path

tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = AutoModelForCausalLM.from_pretrained(MODEL_PATH, device_map="auto", torch_dtype=torch.float16)  # Use float16 for faster inference if supported

def generate_answer(prompt, max_len=300):
    device = "cuda" if torch.cuda.is_available() else "cpu"
    inputs = tokenizer(prompt, return_tensors="pt").to(device)

    with torch.no_grad():
        # Less accurate, but light-weight and fast.
        output = model.generate(
            **inputs,
            max_length=max_len,
            pad_token_id=tokenizer.eos_token_id,
            num_beams=1,  # Greedy decoding for faster and deterministic output
            temperature=0.3,
            eos_token_id=tokenizer.eos_token_id,
            do_sample=False,  # Disable sampling for deterministic output
            no_repeat_ngram_size=2  # Prevent repetition in output
        )

    # Decode and print the output
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    return response

def trim_answer(answer, max_lines=3):
    lines = answer.strip().split("\n")
    lines = [line.strip() for line in lines if line.strip() != '']
    if len(lines) <= 1:
        return lines[0]
    elif len(lines) <= max_lines:
        lines = lines[:-1]
    else:
        lines = lines[:max_lines]
    return "\n".join(lines)

if __name__ == "__main__":
    prompt = "Where's the capital of Australia?"
    response = generate_answer(prompt)
    response = trim_answer(response, max_lines=3)
    print(response)
