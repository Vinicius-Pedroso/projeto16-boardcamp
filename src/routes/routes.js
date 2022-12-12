import { Router } from "express";
import { categoriesCreate } from "../controllers/categoriesCreate";
import { categoriesList } from "../controllers/categoriesList";
import { categoriesValidation } from "../middleware/categoriesValidation";

const router = Router();

router.get("/categories", categoriesList)
router.post("/categories", categoriesValidation, categoriesCreate);
router.get("/games", );
router.post("/games", )
router.get("/customer", )
router.get("/customer/id:", )
router.post("/customer", )
router.put("/customer", )
router.get("/rentals", )
router.post("/rentals", )
router.post("/rentals/:id/return", )
router.delete("/rentals/:id", )

export default router;

