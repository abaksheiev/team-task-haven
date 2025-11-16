1. Layers in DDD
Infrastructure layer

REST controller (input/output over HTTP)
Database implementation of repositories (e.g., ORM like TypeORM, Prisma)
Application layer

Services / use-case orchestration
Domain layer

Entities, Value Objects, Domain Services, Repository interfaces


2. Flow “Get All Users”
Here’s how it travels:

```
[ Client / Browser ]
      ↓ HTTP Request (GET /users)
[ REST Controller (Infrastructure) ]
      ↓ calls application service
[ Application Service ]
      ↓ uses domain repository interface
[ Repository (Infrastructure) ]
      ↓ executes DB query (ORM / SQL)
[ Returns array of User entities ]
      ↑ bubbles back to Controller
[ Controller → map to DTOs ]
      ↑ sends JSON to client
```