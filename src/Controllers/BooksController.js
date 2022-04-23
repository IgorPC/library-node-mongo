import bookService from '../Services/BookService.js';

class BooksController {

    async index(req, res) {
        let books = await bookService.all();

        res.status(200).json(books);
    }

    async show(req, res) {
        try {
            let books = await bookService.findBook(req.params.id);
    
            res.status(200).json(books);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async store(req, res) {
        try {
            await bookService.create(req.body);

            res.status(200).json({message: "Book successfully created"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            await bookService.update(req.params.id, req.body);

            res.status(200).json({message: "Book successfully updated"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async delete(req, res) {
        try {
            await bookService.remove(req.params.id);

            res.status(200).json({message: "Book successfully deleted"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async findByAuthor(req, res) {
        let books = await bookService.findByAuthor(req.params.authorId);
        res.status(200).json(books);
    }

}

export default new BooksController();