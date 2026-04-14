from app.db.user_db import users_db
from app.models.user import User
from datetime import datetime


def create_user(user: User):
    users_db.append(user)
    return {"message": "User created", "data": user}


def get_users():
    return users_db


def get_user(user_id: str):
    for user in users_db:
        if user.id == user_id:
            return user
    return {"message": "User not found"}


def update_user(user_id: str, new_data: dict):
    for user in users_db:
        if user.id == user_id:
            user.name = new_data.get("name", user.name)
            user.email = new_data.get("email", user.email)
            user.role = new_data.get("role", user.role)
            user.is_active = new_data.get("is_active", user.is_active)
            user.updated_at = datetime.utcnow()
            return {"message": "User updated", "data": user}

    return {"message": "User not found"}


def delete_user(user_id: str):
    for user in users_db:
        if user.id == user_id:
            users_db.remove(user)
            return {"message": "User deleted"}

    return {"message": "User not found"}