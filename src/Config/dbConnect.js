import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://root:root@node-books.gtfb5.mongodb.net/node`);

let db = mongoose.connection;

export default db;