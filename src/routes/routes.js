import { Router } from "express";
import { categoriesCreate } from "../controllers/categoriesCreate";
import { categoriesList } from "../controllers/categoriesList";
import { gamesCreate } from "../controllers/gamesCreate";
import { gamesList } from "../controllers/gamesList";
import { categoriesValidation } from "../middleware/categoriesValidation";
import { gamesValidation } from "../middleware/gamesValidation";

const router = Router();

router.get("/categories", categoriesList)
router.post("/categories", categoriesValidation, categoriesCreate);
router.get("/games", gamesList);
router.post("/games", gamesValidation, gamesCreate)
router.get("/customer", )
router.get("/customer/id:", )
router.post("/customer", )
router.put("/customer", )
router.get("/rentals", )
router.post("/rentals", )
router.post("/rentals/:id/return", )
router.delete("/rentals/:id", )

export default router;

