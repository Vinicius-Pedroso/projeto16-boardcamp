import { Router } from "express";
import { categoriesCreate } from "../controllers/categories/categoriesCreate.js";
import { categoriesList } from "../controllers/categories/categoriesList.js";
import { customersList } from "../controllers/customers/customersList.js";
import { customersListById } from "../controllers/customers/customersListById.js";
import { customersUpdate } from "../controllers/customers/customersUpdate.js";
import { gamesCreate } from "../controllers/games/gamesCreate.js";
import { gamesList } from "../controllers/games/gamesList.js";
import { rentalsCreate } from "../controllers/rentals/rentalsCreate.js";
import { rentalsDelete } from "../controllers/rentals/rentalsDelete.js";
import { rentalsUpdate } from "../controllers/rentals/rentalsFinish.js";
import { rentalsList } from "../controllers/rentals/rentalsList.js";
import { categoriesValidation } from "../middleware/categoriesValidation.js";
import { customersValidation } from "../middleware/customersValidation.js";
import { gamesValidation } from "../middleware/gamesValidation.js";
import { rentalsValidation } from "../middleware/rentalsValidation.js";

const router = Router();

router.get("/categories", categoriesList)
router.post("/categories", categoriesValidation, categoriesCreate);
router.get("/games", gamesList);
router.post("/games", gamesValidation, gamesCreate)
router.get("/customer", customersList)
router.get("/customer/id:", customersListById)
router.post("/customer", customersValidation, )
router.put("/customer", customersUpdate)
router.get("/rentals", rentalsList)
router.post("/rentals", rentalsValidation, rentalsCreate)
router.post("/rentals/:id/return", rentalsUpdate)
router.delete("/rentals/:id", rentalsDelete)

export default router;

