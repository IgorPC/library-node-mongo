import express from "express";
import db from './Config/dbConnect.js';
import routes from './Routes/Routes.js';

db.on("error", console.log.bind(console, "Mongo connection error"));

db.once("open", () => {
    console.log("Mongo successfully connected")
});

const app = express();
app.use(express.json())

routes(app);

export default app;