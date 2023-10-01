import os
from langchain.document_loaders import TextLoader
from langchain.chat_models import ChatOpenAI
from langchain.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter
from langchain.chains.conversation.memory import (
    ConversationBufferMemory, ConversationSummaryMemory, ConversationBufferWindowMemory)
from langchain.chains import ConversationChain
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain import OpenAI
from langchain.llms import OpenAI

from flask import Flask, render_template, request

app = Flask(__name__)

# Create a Main route here
os.environ["OPENAI_API_KEY"] = "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"

llm = OpenAI(temperature=0, model_name="text-davinci-003")

conversation = ConversationChain(
    llm=llm,
    verbose=True,
    memory=ConversationBufferMemory()
)


@app.route('/')
def input():
    return render_template('Temp.html')

# Create other routes here.
# host/passing will be the website link


@app.route('/passing', methods=['GET', 'POST'])
def display():
    if request.method == 'POST':
        result = request.form

        # Send result data to result_data HTML file
    return render_template("result_data.html", result=result)


@app.get("/result")
def result():
    loader = TextLoader("./recognized.txt")
    text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    documents = loader.load()
    docs = text_splitter.split_documents(documents)
    embeddings = OpenAIEmbeddings()
    db = FAISS.from_documents(docs, embeddings)
    print(docs)
    query = "I'm creating a system that can take interview chats and can give us the score and accuracy on how he/she did the interview. I'll provide you the interview conversation script and I want you to see how the interview has gone, give me the score, also how the person giving interview did, what are the ways in which he/she can improve his/her interview. "
    result = db.similarity_search(query)
    print(result)
    docs_text = " ".join([doc.page_content for doc in result])
    resd = llm(
        f"I have a paragraph about a question answered by an interviewee which is {docs_text}. From the given text above, The interviwee wants to know how well he/she spoke professionally. I want you to rate the given speech out of ten about how good the interview was. Also give me the strong parts about the spech and areas of improvement so that next time the interview become better.")
    return resd


# main route to start with
if __name__ == '__main__':
    app.run(debug=True)
