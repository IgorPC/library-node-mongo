import books from "../Models/Book.js";
import apiException from "../Exceptions/ApiException.js";

class BookService {

    async all() {
        return books.find().populate('author').exec();
    }

    async findBook(id) {
        const book = await books.findById(id).populate('author', 'name').exec();

        if(! book) {
            throw new apiException('Book not found', 404);
        }

        return book;
    }

    async create(attributes) {
        let book = new books(attributes);
        book = await book.save();

        if(! book) {
            throw new apiException("Cannot create this book, verify the fields and try again", 400);
        }

        return true;
    }

    async update(id, attributes) {
        let book = await books.findByIdAndUpdate(id, {$set: attributes});

        if(! book) {
            throw new apiException('Cannot update this book', 400);
        }
        
        return true;
    }

    async remove(id) {
        let book = await books.findByIdAndDelete(id);

        if(! book) {
            throw new apiException('Cannot delete this book', 400);
        }
        
        return true;
    }

    async findByAuthor(authorId) {
        let booksByAuthor = await books.find({
            'author': authorId
        }).populate('author').exec();

        return booksByAuthor;
    }
}

export default new BookService();