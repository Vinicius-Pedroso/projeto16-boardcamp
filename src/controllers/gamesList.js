import { connection } from "../database";

export async function gamesList (req, res) {
  
  try {
    const getCategoryName = await connection.query(`SELECT name FROM categories WHERE ${categoryId}`)
    const listGames = await connection.query('SELECT * FROM games');
    res.status(200).send(listGames.rows[0]);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

//pesquisar query no SQL