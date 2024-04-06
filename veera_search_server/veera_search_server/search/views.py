
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from veera_search_server.db import fetch_key, set_key
from veera_search_server.search.search_logic import fetch_search_results
from veera_search_server.response import data


class SearchView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        print('herererererer')
        query = request.GET.get('query')
        print(data)
        # response = fetch_key(query)
        # if not response:
        #     response = fetch_search_results(query)
        #     set_key(query, response)
        try:
            response = data.get(query, {})
        except:
            print("error")

        return Response(response, status=status.HTTP_200_OK)
