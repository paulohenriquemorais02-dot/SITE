from mangum import Mangum
import sys
import os
from pathlib import Path

# Add backend directory to path
backend_dir = Path(__file__).parent.parent / "backend"
sys.path.insert(0, str(backend_dir))

# Set environment variables if needed (Vercel provides these)
# The .env file won't be available in serverless, use Vercel environment variables

# Import the FastAPI app from backend
from server import app

# Create handler for Vercel serverless functions
# lifespan="off" disables startup/shutdown events (not supported in serverless)
handler = Mangum(app, lifespan="off")

