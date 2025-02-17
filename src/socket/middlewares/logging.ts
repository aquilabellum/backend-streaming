// middleware to log the client connection
import { Socket } from "socket.io";

const socketLoggingMiddleware = (socket: Socket, next: any) => {
  console.log(`Middleware: Client connected: ${socket.id}`);
  next();
};

export { socketLoggingMiddleware };
