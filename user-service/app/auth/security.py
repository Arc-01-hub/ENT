from jose import jwt
import requests

KEYCLOAK_URL = "http://192.168.11.222:8080"
REALM = "est"
ALGORITHMS = ["RS256"]


def get_public_key():
    url = f"{KEYCLOAK_URL}/realms/{REALM}/protocol/openid-connect/certs"
    return requests.get(url).json()


def verify_token(token: str):
    try:
        header = jwt.get_unverified_header(token)

        jwks = get_public_key()

        key = {}
        for k in jwks["keys"]:
            if k["kid"] == header["kid"]:
                key = {
                    "kty": k["kty"],
                    "kid": k["kid"],
                    "use": k["use"],
                    "n": k["n"],
                    "e": k["e"],
                }

        decoded = jwt.decode(
            token,
            key,
            algorithms=ALGORITHMS,
            audience="account",
            options={"verify_aud": False}
        )

        return decoded

    except Exception as e:
        return None