import { connection } from "../database.js";

export async function gamesCreate (req, res) {
  const {name, image, stockTotal, categoryId, pricePerDay} = req.body;
  
  try {
    await connection.query(`INSERT INTO games (name,image,stockTotal,categoryId,pricePerDay) VALUES (${{name, image, stockTotal, categoryId, pricePerDay}})`);
    return res.status(201);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};


