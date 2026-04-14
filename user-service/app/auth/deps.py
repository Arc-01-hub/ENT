from fastapi import Header, HTTPException,Depends
from app.auth.security import verify_token

def get_current_user(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="No token provided")

    token = authorization.split(" ")[1]

    user = verify_token(token)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid token")

    return user

def require_role(role: str):
    def wrapper(user=Depends(get_current_user)):
        roles = user.get("realm_access", {}).get("roles", [])

        if role not in roles:
            raise HTTPException(
                status_code=403,
                detail="Forbidden: insufficient role"
            )

        return user

    return wrapper