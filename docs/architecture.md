# Architecture - Daily Dashboard

## Goal
Didactic full-stack project to learn:
- React (frontend)
- .NET (backend)
- Docker
- Multi-agent development (Antigravity, Codex)

## Stack (initial)
- Frontend: React + TypeScript + Vite
- Backend: ASP.NET Core (future)
- Database: PostgreSQL (future)
- Messaging: RabbitMQ (future)
- Logging: Serilog + Seq (future)
- Deployment: Netlify (frontend), Docker (later)

## Principles
- Keep it simple
- Build incrementally
- Avoid premature complexity
- One responsibility per component
- Clear folder structure

## Architecture (target)
Frontend (React)
→ calls API
Backend (.NET)
→ business logic
→ data storage (PostgreSQL)
→ async jobs (RabbitMQ)

## Milestone 1 scope
- Frontend only
- Mock data
- Dashboard UI
- Netlify deploy

## Out of scope (M1)
- Authentication
- Database
- Real APIs
- Background jobs
- Docker full stack

## Frontend rules
- Small components
- Explicit props
- No heavy UI libraries
- Simple CSS
- Readable code

## Agent rules
- One task at a time
- Do not modify unrelated files
- Output only requested content
- Keep answers short