import Express from "express";
import cors from "cors";
import path from "path";
import { clerkMiddleware } from "@clerk/express";
import { ENV } from "./config/env";

const app = Express();

app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
// `credentials: true` allows the frontend to send cookies to the backend so that we can authenticate the user.
app.use(clerkMiddleware()); // auth obj will be attached to the req
app.use(Express.json()); // parses JSON request bodies.
app.use(Express.urlencoded({ extended: true })); // parses form data (like HTML forms).


app.get("/", (req, res) => {
    res.send("Hello, World!");
});



app.listen(ENV.PORT, () => {
    console.log(`Server is running on eiei port ${ENV.PORT}`);
});