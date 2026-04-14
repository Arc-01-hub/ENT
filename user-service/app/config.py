import os
from xmlrpc import client

class Config:
    # Database configuration
    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_PORT = int(os.getenv("DB_PORT", 5432))
    DB_NAME = os.getenv("DB_NAME", "user_db")
    DB_USER = os.getenv("DB_USER", "user")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "password")

    # API configuration
    API_PREFIX = "/api/v1"
    API_VERSION = "1.0.0"
    # Cassandra configuration (if needed in the future)
    CASSANDRA_HOST = os.getenv("CASSANDRA_HOST", "localhost")
    KEYSPACE = os.getenv("KEYSPACE", "user_keyspace")
    
    # keycloak configuration (if needed in the future)
    KEYCLOAK_URL = os.getenv("KEYCLOAK_URL", "http://192.168.11.222:8080")
    REALM = os.getenv("REALM", "est")
    CLIENT_ID = os.getenv("CLIENT_ID", "ent-client")