from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Harmony Health Clinic API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/welcome")
async def read_welcome():
    """Return a friendly welcome message for the Harmony Health Clinic homepage."""
    return {
        "message": (
            "Welcome to Harmony Health Clinic! Our team is ready to support your family's preventive and personalized care journey."
        )
    }
