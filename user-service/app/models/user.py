from pydantic import BaseModel, EmailStr
from datetime import datetime
import uuid

class User(BaseModel):
    id: str = str(uuid.uuid4())
    name: str
    email: EmailStr
    role: str = "student"

    is_active: bool = True
    created_at: datetime = datetime.utcnow()