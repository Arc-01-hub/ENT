from fastapi import Depends, HTTPException
from app.auth.dependencies import get_current_user

def require_role(role: str):
    def checker(user=Depends(get_current_user)):
        roles = user.get("realm_access", {}).get("roles", [])
        if role not in roles:
            raise HTTPException(status_code=403, detail="Forbidden")
        return user
    return checker