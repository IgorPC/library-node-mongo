import authorService from '../Services/AuthorService.js';

class AuthorsController {

    async index(req, res) {
        let authors = await authorService.all();
        res.status(200).json(authors);
    }

    async show(req, res) {
        try {
            const author = await authorService.findAuthor(req.params.id);

            res.status(200).json(author);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async store(req, res) {
        try {
            await authorService.create(req.body);

            res.status(200).json({message: "Author successfully created"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            await authorService.update(req.params.id, req.body);

            res.status(200).json({message: "Author successfully updated"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async delete(req, res) {
        try {
            await authorService.remove(req.params.id);

            res.status(200).json({message: "Author successfully deleted"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}

export default new AuthorsController();