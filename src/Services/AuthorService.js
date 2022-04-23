import authors from '../Models/Author.js';
import apiException from "../Exceptions/ApiException.js";

class AuthorService {
    async all() {
        return authors.find();
    }

    async findAuthor(id) {
        let author = await authors.findById(id);

        if (! author) {
            throw new apiException('Author not found', 404);
        }

        return author;
    }

    async create(attributes) {
        let author = new authors(attributes);
        author = await author.save();

        if (! author) {
            throw new apiException("Cannot create this author, verify the fields and try again", 400);
        }

        return true;
    }

    async update(id, attributes) {
        let author = await authors.findByIdAndUpdate(id, {$set: attributes});

        if (! author) {
            throw new apiException('Cannot update this author', 400);
        }

        return true;
    }

    async remove (id) {
        let author = await authors.findByIdAndDelete(id);

        if (! author) {
            throw new apiException('Cannot delete this author', 400);
        }

        return true;
    }
}

export default new AuthorService();