from fastapi import FastAPI
from app.routes.user_routes import router

app = FastAPI()

app.title = "User Management API"
app.description = "A simple API for managing users in an educational platform."

app.include_router(router)