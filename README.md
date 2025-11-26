# Kanban Task Manager

A Kanban board for task management with drag-and-drop functionality, built using **React**, **react-beautiful-dnd**, and a **Node.js/Express** backend implementing **Domain-Driven Design (DDD)** with **TypeORM**.

Features:
- Create, delete, edit tasks
- Drag and drop tasks between columns
- Persist status changes to the database

## Tech Stack

**Frontend:**
- React
- react-beautiful-dnd
- react-router-dom

**Backend:**
- Node.js + Express
- TypeScript
- tsyringe (Dependency Injection)
- TypeORM
- PostgreSQL

**Architecture:**
- Domain-Driven Design (DDD)
- Value Objects, Entities, Repositories, Services

## Installation & Run

### 1. Clone the repository
```bash
git clone https://github.com/abaksheiev/team-task-haven.git
cd team-task-haven
```

***API Documentation***

**GET /api/tasks**

Returns all tasks from the system.
```
[
  {
    "id": "38ed90b5-4132-477f-83a3-778937c081b1",
    "title": "Create tests",
    "description": "Add unit tests for user service",
    "status": "todo",
    "assigneeId": "user-uuid"
  }
]
```