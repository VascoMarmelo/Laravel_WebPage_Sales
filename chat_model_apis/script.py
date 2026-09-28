from llama_cpp import Llama

llm = Llama.from_pretrained(
    repo_id="Qwen/Qwen2.5-Coder-7B-Instruct-GGUF",
    filename="qwen2.5-coder-7b-instruct-q4_k_m.gguf",
    n_ctx=8192,
    verbose=True,
)

response = llm.create_chat_completion(
    messages=[
        {
            "role": "user",
            "content": "Write a Python function that calculates Fibonacci numbers."
        }
    ],
    max_tokens=512,
    temperature=0.7,
)

print(response["choices"][0]["message"]["content"])