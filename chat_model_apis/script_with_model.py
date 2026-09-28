from llama_cpp import Llama
import time

print("...Starting time")
start_time = time.time()

llm = Llama(
    model_path="model/qwen2.5-coder-7b-instruct-q5_k_m.gguf",
    n_ctx=8192,
    n_gpu_layers=-1,
    verbose=True,
)

print(f"Load Complete ({time.time() - start_time})")
print("================================================================")
print("Please enter your prompt:")
content = input()

response = llm.create_chat_completion(
    messages=[
        {
            "role": "user",
            "content": content
        }
    ],
    max_tokens=512,
    temperature=0.7,
)

print(response["choices"][0]["message"]["content"])