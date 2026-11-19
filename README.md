# Sysguild

A full-stack web app with a React frontend and a Django REST backend. It is in an early stage: there is a profile-picker style login screen on the frontend and a single greeting endpoint on the backend.

## Tech stack

- **Frontend:** React 19, React Router 7, Vite
- **Backend:** Django, Django REST Framework, django-cors-headers
- **Database:** SQLite (local development)

## Project structure

```
sysguild/
├── backend/     # Django project
│   ├── config/  # settings, root URLs, WSGI/ASGI
│   └── api/     # REST API app
└── frontend/    # React + Vite app
    └── src/
        ├── components/
        ├── pages/
        └── services/   # API client
```

## Getting started

### Prerequisites

- Python 3.12
- Node.js and npm

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver
```

The API runs at `http://127.0.0.1:8000/`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173/`. The backend allows CORS requests from that origin and from `http://127.0.0.1:5173`.

## API

| Method | Endpoint       | Body                | Response                                  |
| ------ | -------------- | ------------------- | ----------------------------------------- |
| POST   | `/api/greet/`  | `{ "name": "Ada" }` | `{ "name": "Ada", "message": "Hello, Ada!" }` |

Returns `400` with `{ "error": "Name is required." }` if `name` is missing or empty.

## Frontend scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start the dev server           |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview the production build   |
| `npm run lint`    | Lint with oxlint               |

## Notes

- `SECRET_KEY` and `DEBUG` are currently set for local development in `backend/config/settings.py`. Use environment variables and set `ALLOWED_HOSTS` before deploying.
