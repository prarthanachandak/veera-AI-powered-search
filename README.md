# veera-AI-powered-search
AI powered Search with Veera

1. API Service
    Handles the API endpoints with user queries.
    This service hits the cache and checks if queried data is available. In the case of cache miss, it gets the data from the Summary Generation service. 

2. Information Extraction Service
    Uses Serpapi AI services to fetch the top 10 search results along with images, maps and any other related content that can be used as a part of content refinement. The required data is extracted from the api response and grouped based on the context( wrt query) and added the respective Kafka queues topics for further processing. Ex Textual content, images, videos, charts, tables, etc.
    NOTE: Serpapi : Since it is a paid API, for the POC purpose, we are going with sample data supported by the Serpapi service.

3. Content Refinement Service
    The content from each group of each page obtained from the queues is carefully read by the NLPs like Extraction-based summarization and Abstraction-based summarization models and then a summary is generated for each one of them. Each query topic has top 10 summaries available.
    NOTE: For the POC, we are going with OpenAi's Chat GPT. The current available 3rd party tools, like Chat GPT or Perplexity cannot actually read the page contents or the page SEO details. NLPs like Extraction-based summarization and Abstraction-based summarization can be used to appropriately generate the summaries.

4. DB Service
    The processed data from the refinement service is stored into a key-value data store like DynamoDB or Cosmos DB, which are fully managed, scalable, and highly available. The scheduled processing from the Conent Refinement Service keeps this data updated and relevant.

5. Summary Generation service : 
    Based on the query, the service interacts with the database and fetches the 10 top processed summaries and combines it into an aggregated summary and returns it.
    Other data like images, videos, charts, tables, etc. are returned where applicable.

6. Cache Service
    Data is cached in CDN for low latency. This service takes care of the cache hits and misses, keeping the cache relevant with timely upadtes and expires based on the trending information and TTL of the cache.


Assumptions:
1. Scheduled Kafka Pipelines are used to process the internet content for specific queries and updating the database.
2. Processed Data is available in the NOSQL database, is always up-to-date.
2. CDN is populted with trending and frequently queried data, with regular updated and deletes.
