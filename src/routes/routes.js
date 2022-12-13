import { Router } from "express";
import { categoriesCreate } from "../controllers/categoriesCreate.js";
import { categoriesList } from "../controllers/categoriesList.js";
import { customersList } from "../controllers/customersList.js";
import { customersListById } from "../controllers/customersListById.js";
import { gamesCreate } from "../controllers/gamesCreate.js";
import { gamesList } from "../controllers/gamesList.js";
import { categoriesValidation } from "../middleware/categoriesValidation.js";
import { customersValidation } from "../middleware/customersValidation.js";
import { gamesValidation } from "../middleware/gamesValidation.js";

const router = Router();

router.get("/categories", categoriesList)
router.post("/categories", categoriesValidation, categoriesCreate);
router.get("/games", gamesList);
router.post("/games", gamesValidation, gamesCreate)
router.get("/customer", customersList)
router.get("/customer/id:", customersListById)
router.post("/customer", customersValidation, )
router.put("/customer", )
router.get("/rentals", )
router.post("/rentals", )
router.post("/rentals/:id/return", )
router.delete("/rentals/:id", )

export default router;

