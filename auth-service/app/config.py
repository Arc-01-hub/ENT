import os

KEYCLOAK_URL = os.getenv("KEYCLOAK_URL", "http://192.168.11.222:8080/realms/ent-realm")
ALGORITHM = "RS256"