from jose import jwt
import requests
from app.config import KEYCLOAK_URL, ALGORITHM

def get_public_keys():
    url = f"{KEYCLOAK_URL}/protocol/openid-connect/certs"
    return requests.get(url).json()

def decode_token(token: str):
    return jwt.get_unverified_claims(token)