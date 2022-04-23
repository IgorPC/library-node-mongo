import express from "express";
import AuthorsController from "../Controllers/AuthorsController.js";

const router = express.Router();

router.get("/author", AuthorsController.index);
router.get("/author/:id", AuthorsController.show);
router.post("/author", AuthorsController.store);
router.put("/author/:id", AuthorsController.update);
router.delete("/author/:id", AuthorsController.delete);

export default router;