# from cassandra.cluster import Cluster
# from app.config import CASSANDRA_HOST, KEYSPACE


# cluster = Cluster([CASSANDRA_HOST])
# session = cluster.connect()
# session.set_keyspace(KEYSPACE)
from app.models.user import User

users_db = [
    User(
        name="Rachid",
        email="rachid@gmail.com",
        role="student"
    ),
    User(
        name="Sara",
        email="sara@gmail.com",
        role="teacher"
    ),
    User(
        name="Youssef",
        email="youssef@gmail.com",
        role="student"
    ),
    User(
        name="Admin One",
        email="admin@est.ma",
        role="admin"
    )
]