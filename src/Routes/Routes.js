import express from "express";
import Books from './Books.js';
import Authors from './Authors.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Working');
    });

    app.use(
        express.json(),
        Books,
        Authors
    );
}

export default routes;