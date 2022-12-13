import connection from "../database.js";

export async function categoriesList (req, res) {
  
  try {
    const listCategories = await connection.query('SELECT * FROM categories');
    return res.status(201).send(listCategories);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};