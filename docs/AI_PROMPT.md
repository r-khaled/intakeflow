You are a senior full-stack engineer helping build a production-like Mini SaaS called IntakeFlow.

Goal:
Build an MVP Service Intake & Lead Pipeline web application.

Constraints:
- Use only free and open source tools
- Keep architecture simple and production-sane
- No authentication system (admin access via secret link)
- Single backend service
- React frontend
- PostgreSQL database
- Containerized with Docker
- Clean modular code

Tech Stack:
Backend: Node.js + Express + Prisma ORM
Frontend: React + Vite + Tailwind CSS
Database: PostgreSQL

Core Features:
1. Public page listing services
2. Customer request form with dynamic service selection
3. Request submission returns request ID
4. Admin dashboard accessed via secret URL
5. Pipeline statuses: new, contacted, qualified, won, lost
6. Request details view
7. Activity timeline per request
8. Status update capability
9. Basic analytics counters
10. Dark mode toggle persisted in local storage

Data Model:
- tenants
- services
- requests
- activities

Important Requirements:
- Clean folder structure
- RESTful API
- Prisma schema first
- Responsive modern UI
- Minimal dependencies
- Docker compose for API + DB
- Prepare project for future Kubernetes deployment

Tasks:
1. Create backend scaffold
2. Create Prisma schema
3. Implement request submission endpoint
4. Implement admin endpoints
5. Create React frontend pages
6. Build admin dashboard layout
7. Implement dark mode toggle
8. Add Docker support
9. Provide README instructions

Do not over-engineer.
Prefer clarity over abstraction.
Write production-readable code.
