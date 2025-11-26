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

## Features
- Create, delete, edit tasks
- Drag & Drop tasks between columns
- Persist status changes in the database
- DDD separation into Domain, Application, Infrastructure, Presentation
- Value Objects for safe domain modeling

## Live Demo (Vercel + Render)
[View Online](https://your-kanban-demo.com)

## Installation & Run

### 1. Clone the repository
```bash
git clone https://github.com/abaksheiev/team-task-haven.git
cd team-task-haven
```