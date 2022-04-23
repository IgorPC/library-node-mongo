import mongoose from "mongoose";

const Book = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors',
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    number_pages: {
        type: Number,
        required: true
    }
});

const books = mongoose.model('books', Book);

export default books;