from typing import List
import requests
import json
from bs4 import BeautifulSoup
from bs4.element import Comment
import urllib.request


def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True


def text_from_html(body):
    soup = BeautifulSoup(body, 'html.parser')
    texts = soup.findAll(string=True)
    visible_texts = filter(tag_visible, texts)
    cleaned_texts = []
    for t in visible_texts:
        try:
            cleaned_text = t.strip()
            cleaned_text = cleaned_text.encode('ascii', 'ignore').decode('ascii')
            cleaned_texts.append(cleaned_text)
        except Exception as e:
            pass
    return " ".join(cleaned_texts)


urls = [
   'https://recipes.timesofindia.com/recipes/homemade-cake/rs54404412.cms',
   'https://www.crompton.co.in/blogs/kitchen-hacks/baking-cake-in-otg-oven/',
   'https://www.wikihow.com/Bake-a-Cake'
]



parsed_content = {}



def fetch_website_summary_data(website_url: str, website_summary_data: str, search_term: str):
    url = "https://api.openai.com/v1/chat/completions"
    payload = json.dumps({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": f"{website_url} is the website for which I’ve scraped the content as {website_summary_data}. This website corresponds to user’s query {search_term}. Generate a summary in 300 words for given content."
            }
        ],
        "temperature": 0.2,
        "n": 1,
        "stop": "###",
        "max_tokens": 1000,
        "presence_penalty": 0
    })
    
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {API_KEY}'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.json())
    return response.json()["choices"][0]["message"]["content"]



def fetch_summary_llm_text_summation(data_string: str):
    url = "https://api.openai.com/v1/chat/completions"
    payload = json.dumps({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": f"{data_string} . Summarize the data in 300 words into 4 breakdowns. 1. Headline, 2. Paragraph, 3. HTML Code, 4. Media Links where in 3rd breakdown, tabular foramat with thick border  is required in html format. Also include image links if any, if no links return a empty list i.e []. return the response in json format with Headline, Paragraph, HTML Code and Media Links keys. This website corresponds to user’s query ‘gdp rate year wise for india’. I want a combined summary from all the contents in 300 words and the summary should be in tabular format. Return the table in html format. Also give me a small 150 word summary in text format from all of the contents above. In the summary, if a certain sentence from your summary is from a certain key:value pair in the json, write the key(which is an url) right after that sentence."
            }
        ],
        "temperature": 0.2,
        "n": 1,
        "stop": "###",
        "max_tokens": 1000,
        "presence_penalty": 0
    })
    
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {API_KEY}'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.json())
    return json.loads(response.json()["choices"][0]["message"]["content"])


def generate_text_summarization(website_urls: List[str], search_term: str) -> str:
    # scrapped_data = {}
    summary_data = {}

    for i in website_urls:
        scrapped_data = scrap_website_data(i)
        if len(scrapped_data) > 50:
            summary_data[i] = fetch_website_summary_data(i, scrapped_data, search_term=search_term)

    summary_data = fetch_summary_llm_text_summation(str(summary_data)[1:-2])
    return summary_data


def scrap_website_data(website_url: str):
    try:
        html = urllib.request.urlopen(website_url).read()
        abc = text_from_html(html)
        abc = abc[100: 5100]
        parsed_content = text_from_html(html)
    except Exception as e:
        parsed_content = str(e)

    print(parsed_content)
    return parsed_content


if __name__ == "__main__":
    data = generate_text_summarization(urls, "Instructions on baking a cake")
    print(data)
