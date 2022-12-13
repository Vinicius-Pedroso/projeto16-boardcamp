import { connection } from "../../database.js";

export async function gamesList (req, res) {
  
  try {
    const getCategoryName = await connection.query(`SELECT name FROM categories WHERE ${categoryId}`)
    const listGames = await connection.query('SELECT * FROM games');
    return res.status(201).send(listGames);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

//pesquisar query no SQL