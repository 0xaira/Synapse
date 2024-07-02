import express, { Request, Response } from "express";
import { chats } from "./data/data";
import dotenv from "dotenv";

const PORT= process.env.PORT || 5000;
const app = express();
dotenv.config();

app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
});

app.get("/api/chats", (req: Request, res: Response) => {
    res.send(chats);
});

app.get("/api/chats/:id", (req: Request, res: Response) => {
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
