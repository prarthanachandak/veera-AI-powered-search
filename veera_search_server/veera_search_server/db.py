from django.core.cache import caches

search_cache = caches['search_db']


def set_key(key, value):
    search_cache.set(key, value)
    return True


def fetch_key(key):
    return search_cache.get(key, None)
    