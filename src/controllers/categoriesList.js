

export async function categoriesList (req, res) {
  
  try {
    const listCategories = await connection.query('SELECT * FROM categories');
    res.status(201).send(listCategories);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};