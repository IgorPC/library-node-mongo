import mongoose from "mongoose";

const Author = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    citizenship: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

const authors = mongoose.model('authors', Author);

export default authors;