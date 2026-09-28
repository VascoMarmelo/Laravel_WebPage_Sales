from fastapi import FastAPI
from pydantic import BaseModel
from llama_cpp import Llama

class ModelRequest(BaseModel):
    user_id: str
    prompt_text: str

class KnowUser:

    def __init__(self, user_id):
        self.user_id = user_id
        self.last_prompt_history = []

    def add_new_prompt(self, new_prompt : str):
        self.last_prompt_history.append(new_prompt)

    def verify_if_user(self, user_id):
        return True if user_id == self.user_id else False

    def get_prompt_history(self):
        return self.last_prompt_history


user_list = []

app = FastAPI()

llm = Llama(
    model_path="model/qwen2.5-coder-7b-instruct-q5_k_m.gguf",
    n_ctx=8192,
    n_gpu_layers=-1,
    verbose=True,
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/model/")
async def read_prompt(request: ModelRequest):

    print("RECEIVE CALL")

    old_prompts = []
    user = -1
    new_user = True

    # Verify if user is in historic
    for l in user_list:
        if l.verify_if_user(request.user_id):
            user = l
            old_prompts = l.get_prompt_history()
            new_user = False
            break

    print(new_user)
    
    # If is not knowed, add as new user
    if new_user:
        user_list.append(KnowUser(request.user_id))
        user = user_list[0]
 
    # Mix old prompt with new one
    final_prompt = ""
    if not new_user:
        final_prompt += f"Old Prompts:"
        final_prompt += "\n".join(map(str, old_prompts))
    final_prompt += f"New prompt:"
    final_prompt += f"\n{request.prompt_text}"

    # Send to the model
    response = llm.create_chat_completion(
        messages=[
            {
                "role": "user",
                "content": final_prompt
            }
        ],
        max_tokens=512,
        temperature=0.7,
    )
    user.add_new_prompt(response["choices"][0]["message"]["content"])
    user.add_new_prompt(request.prompt_text)

    print(user.get_prompt_history())

    return response["choices"][0]["message"]["content"]