# Laravel_WebPage_Sales
Laravel/React Project for developing a Sales WebPage Template, with ChatBot

<img width="1897" height="942" alt="image" src="https://github.com/user-attachments/assets/7ab3dcc8-e870-4193-ade3-8e5d82771626" />

## ChatBot

The ChatBot works with python in Backend, using FastApi and llama_cpp, working as a separated API server.

The ChatBot need to give a LLM model, for example qwen2.5-coder-7b-instruct-q5_k_m (available in https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct-GGUF) for testing. The **folder need to have the same name as the model main file**, so for _Qwen2.5-Coder-7B-Instruct-GGUF_, need to be _qwen2.5-coder-7b-instruct-q5_k_m.gguf_

To run the ChatBot Backend default configs, use similar command to _MODEL_NAME=qwen2.5-coder-7b-instruct-q5_k_m uv run fastapi dev fast_api.py --port 9000_


## Laravel App

For the Laravel App, works with React Started Kit, working with SQLite3 for learning purposes. The app have the models Product and Personel, with a working Factory for generate false data for testing. The Laravel backend page for CRUD, modified products change to product list on frontend. The product page shows a simple product page, with a list of products still in the works.

For testing purpose, to run, use: _composer run dev_

**!! STILL IN MAJOR WORKS !!**

