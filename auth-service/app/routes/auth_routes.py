from fastapi import APIRouter, Depends
from app.auth.dependencies import get_current_user

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.get("/me")
def get_me(user=Depends(get_current_user)):
    return {
        "message": "User info",
        "user": user
    }