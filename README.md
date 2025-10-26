# Harmony Health Clinic Web Experience

This project customizes the BootstrapMade Clinic template into **Harmony Health Clinic**, a preventive and family-focused medical center. The homepage highlights our proactive care philosophy and surfaces a live greeting that is powered by a FastAPI microservice and displayed through AngularJS.

## Project Structure

- `index.html` – Updated landing page content, imagery, and AngularJS bindings.
- `assets/js/harmony-app.js` – AngularJS module that retrieves the welcome message from the FastAPI service.
- `assets/css/main.css` – Global styles with an `ng-cloak` helper to avoid flashes before AngularJS loads.
- `backend/main.py` – FastAPI application exposing the `/welcome` endpoint with CORS enabled for local development.

## Prerequisites

- Python 3.9+
- Node/npm are **not** required; the front-end uses static assets and CDN dependencies.

## Run the FastAPI Welcome Service

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows use: .venv\Scripts\activate
pip install fastapi uvicorn
uvicorn main:app --reload
```

By default the service listens on `http://127.0.0.1:8000`. The AngularJS component on the homepage is configured to call `http://localhost:8000/welcome`, which also resolves to the same service when run locally. You may override the URL by setting `localStorage.harmonyClinicWelcomeUrl` in your browser console if needed.

## Preview the Website

1. Open `index.html` directly in your browser or serve the project through your preferred static server.
2. Ensure the FastAPI service is running to see the live welcome banner update automatically.
3. If the API is unreachable, the banner gracefully falls back to a default message.

## Customization Tips

- Update `assets/img` with your own imagery to further personalize the site.
- Modify additional HTML pages (About, Services, etc.) to mirror your clinic's programs.
- Extend `backend/main.py` with more endpoints if you would like to power additional AngularJS widgets.
