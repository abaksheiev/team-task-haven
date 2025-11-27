console.log('server.ts: start'); 
import { app } from "./app";
import { initDb } from "./infrastructure/db/init";

async function startServer() {
console.log('startServer()'); process.stdout.write('');
    
  try {
    await initDb(); // подключаем реальную базу
    const port = process.env.PORT ?? 3000;
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
      console.log(`Swagger docs: http://localhost:${port}/api-docs`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}
console.log('server.ts: start2'); 
startServer();