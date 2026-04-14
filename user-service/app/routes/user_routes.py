from fastapi import APIRouter, Depends
from app.auth.deps import get_current_user, require_role
from app.models.user import User
from app.controller.user_controller import (
    create_user,
    get_users,
    get_user,
    update_user,
    delete_user
)

router = APIRouter(prefix="/users", tags=["Users"])


@router.post("/")
def add_user(user: User, current_user: dict = Depends(require_role("admin"))):
    return create_user(user)


@router.get("/")
def list_users(current_user: dict = Depends(require_role("admin"))):
    return get_users()


@router.get("/{user_id}")
def get_single_user(user_id: str, current_user: dict = Depends(get_current_user)):
    return get_user(user_id)


@router.put("/{user_id}")
def update(user_id: str, user: User, current_user: dict = Depends(require_role("admin"))):
    return update_user(user_id, user.dict())


@router.delete("/{user_id}")
def delete(user_id: str, current_user: dict = Depends(require_role("admin"))):
    return delete_user(user_id)